// import createAsyncThunk เพื่อสร้าง Async action
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
// import axios ในการส่ง request
import axios from 'axios';


const initialState = {
  chatHistory: []
}

const chatHistorySlice = createSlice({
  name: 'chatroom',
  initialState,
  reducers: {
    addUserMessage: (state, action) => {

      
    }
  },
});

// export reducer สำหรับไปเรียกใช้ที่ component ที่ต้องการ
export const { addUserMessage } = chatHistorySlice.actions

export default chatHistorySlice.reducer