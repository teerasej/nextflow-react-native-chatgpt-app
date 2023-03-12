import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    chatHistory: []
}
 
const chatHistorySlice = createSlice({
  name: 'chatroom',
  initialState,
  reducers: {
    // กำหนด function ชื่อ addUserMessage เป็น reducer function
    //   - โดยที่ตัว function จะทำงานเมื่อมีการเรียกใช้จากภายใน component
    //   - ทุกครั้งที่ function reducer ทำงาน จะได้รับ state object ล่าสุด และ action ที่ส่งมาจาก component เสมอ
    addUserMessage: (state, action) => {

      let chatMessage = {
        sender: 'Me',
        text: action.payload
      };

      // แสดงข้อความใน console เพื่อเช็คความถูกต้อง
      console.log(chatMessage);
        
      // เพิ่มข้อความลงไปใน chatHistory ของ slice's state เพื่อที่จะนำไปใช้ใน component
      state.chatHistory.push(chatMessage);
    }
  }
});

// export reducer สำหรับไปเรียกใช้ที่ component ที่ต้องการ
export const { addUserMessage } = chatHistorySlice.actions

export default chatHistorySlice.reducer