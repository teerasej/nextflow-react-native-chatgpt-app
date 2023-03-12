import { View, Text } from 'react-native'

// Import useState เพื่อใช้เก็บค่าที่ได้จาก Input
import React, { useState } from 'react'

import { HStack, Icon, IconButton, Input } from 'native-base'
import { FontAwesome } from '@expo/vector-icons';
const ChatBox = () => {

    // สร้าง state variable chatMessage เก็บค่าจาก input
    const [chatMessage, setChatMessage] = useState("")

    return (
        <>
            <HStack space={2} p={2}>
                {/* เก็บข้อความจาก event onChangeText เข้าตัวแปร state 
                    และดึงค่าตัวแปร state มาแสดงใน input กรณีที่มีการอัพเดตข้อความในตัวแปร state
                */}
                <Input flex={7} placeholder="Talk to me..."
                    onChangeText={(text) => setChatMessage(text)}
                    value={chatMessage}
                />
                {/* ใช้ event onPress ในการดึงข้อความที่อยู่ใน state ออกมาใช้งาน */}
                <IconButton
                    flex={1}
                    borderRadius="sm"
                    variant="solid"
                    icon={<Icon as={FontAwesome} name="send" size="sm" />}
                    onPress={() => {
                        console.log(`Sending message: ${chatMessage}`);
                        
                        // เมื่อสิ้นสุดกระบวนการ จะเซ็ทค่าตัวแปร state เป็นข้อความเปล่า เพื่อเคลียร์ข้อความออกจาก Input 
                        setChatMessage("");
                    }}
                />
            </HStack>
        </>
    )
}

export default ChatBox