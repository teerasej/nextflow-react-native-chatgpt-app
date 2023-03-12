import { View, Text } from 'react-native'
import React from 'react'
import { FlatList } from 'native-base'

const ChatHistory = () => {
  return (
    <>
        {/* ใส่ FlatList สำหรับแสดง Chat history */}
        <FlatList></FlatList>
    </>
  )
}

export default ChatHistory