import { View, Text } from 'react-native'

// import useRef เพื่อสร้างตัวควบคุม flatList
import React, { useRef, useState } from 'react'
import { FlatList, HStack } from 'native-base'
import { useSelector } from 'react-redux'

const ChatHistory = () => {

  const chatHistory = useSelector(state => state.chatroom.chatHistory)

  // สร้าง ref เพื่อเอาไปโยงกับ FlatList
  const flatListRef = useRef();

  const [isListReady, setIsListReady] = useState(false)

  console.log('Showing chat history:');
  console.log(chatHistory);

  return (
    <>
      <FlatList data={chatHistory}
        renderItem={({ item }) => (
          <HStack p={3} space={3} flexWrap={'wrap'} >
            <Text>{item.sender}</Text>
            <Text>{item.text}</Text>
          </HStack>
        )}

        // กำหนด ref ให้ component
        ref={flatListRef}
        // เมื่อข้อมูล data มีการเปลี่ยนแปลง เราสั่ง flatList เลื่อนไปล่างสุด ผ่าน ref ที่กำหนด
        onContentSizeChange={() => {
          if(isListReady) {
            flatListRef.current.scrollToEnd({ animated: true })
          }
        }}
        onLayout={() => setIsListReady(true)}
      >
      </FlatList>
    </>
  )
}

export default ChatHistory