// import createAsyncThunk เพื่อสร้าง Async action
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios ในการส่ง request
import axios from 'axios';

// นำ key ของ OpenAI มาใช้งาน
const key = '';

// สร้าง AsyncThunk ชื่อ fetchOpenAI
export const fetchOpenAI = createAsyncThunk(
  // ตั้งชื่อ async thunk
  'user/fetchOpenAI',

  // รับค่าที่เข้ามาใช้่งาน ในที่นี้คือ prompt message
  async (prompt) => {

    console.log('fetching openAI')

    // สร้าง JSON object ในการส่งไปที่ OpenAI API
    const jsonPrompt = JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [{ "role": "user", "content": prompt }]
    });

    console.log('Sending prompt:')
    console.log(jsonPrompt)

    // ใช้ axios ส่ง request โดยการกำหนด key และ json 
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      jsonPrompt,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${key}`
        }
      });

    console.log('got response:')
    console.log(response.data.choices[0].message.content);

    // ดึงเฉพาะส่วนข้อความที่ API ตอบกลับมา
    return response.data.choices[0].message.content;

  }
);

const initialState = {
  chatHistory: []
}

const chatHistorySlice = createSlice({
  name: 'chatroom',
  initialState,
  reducers: {
    addUserMessage: (state, action) => {

      let chatMessage = {
        id: Math.floor(Math.random() * 1000),
        sender: 'Me',
        text: action.payload,
      };

      console.log(chatMessage);
      state.chatHistory.push(chatMessage);
    }
  },
  // กำหนด reducer พิเศษ ที่จะทำงานตามกรณีของ AsyncThunk
  extraReducers: (builder) => {
    // กำหนด case ที่จะทำงานจากกลไกของ async thunk
    builder
      .addCase(fetchOpenAI.fulfilled, (state, action) => {
        console.log('succeeded');

        // ถ้าได้การทำงานของ Async thunk สมบูรณ์ ค่าที่ return ออกมาจะอยู่ใน payload 
        // ในที่นี้เราจะเอามาใส่เพิ่มในห้องแชท โดยกำหนดชื่อ sender เป็น GPT
        state.push({ sender:'GPT', text: action.payload, id: Math.floor(Math.random() * 1000)})
        
      })
      // ในกรณีที่ Async Thunk ล้มเหลวจะเข้าเคสนี้
      .addCase(fetchOpenAI.rejected, (state, action) => {
        console.log('failed');
        // แสดงข้อความ error ที่ได้
        console.error(action.error.message);
      });
  },
});

// export reducer สำหรับไปเรียกใช้ที่ component ที่ต้องการ
export const { addUserMessage } = chatHistorySlice.actions

export default chatHistorySlice.reducer