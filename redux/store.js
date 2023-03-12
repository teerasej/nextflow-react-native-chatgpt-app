import { configureStore } from '@reduxjs/toolkit'
// import slice ที่ต้องการ
import chatHistorySlice from './chatHistorySlice.js'


export default configureStore({
  reducer: {
    // กำหนด slice ให้เป็น reducer ของ store 
    chatroom: chatHistorySlice
  }
})