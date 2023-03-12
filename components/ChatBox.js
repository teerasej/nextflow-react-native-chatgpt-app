import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { HStack, Icon, IconButton, Input } from 'native-base'
import { FontAwesome } from '@expo/vector-icons';

// เรียกใช้ useDispatch hook
import { useDispatch } from 'react-redux';
// เรียกใช้ reducer function ในการสร้าง action object เพื่อส่งให้กับ redux
import { addUserMessage } from './../redux/chatHistorySlice';

const ChatBox = () => {

    const [chatMessage, setChatMessage] = useState("")

    // สร้าง dispatch function 
    const dispatch = useDispatch();

    return (
        <>
            <HStack space={2} p={2}>
                <Input flex={7} placeholder="Talk to me..."
                    onChangeText={(text) => setChatMessage(text)}
                    value={chatMessage}
                />
                <IconButton
                    flex={1}
                    borderRadius="sm"
                    variant="solid"
                    icon={<Icon as={FontAwesome} name="send" size="sm" />}
                    onPress={() => {
                        console.log(`Sending message: ${chatMessage}`);

                        // ใส่ข้อความที่พิมพ์ลงไปใน action object โดยการเรียกใช้ reducer function
                        const action = addUserMessage(chatMessage);

                        // ส่ง action ไปที่ slice ผ่าน dispatch function
                        dispatch(action);

                        setChatMessage("");
                    }}
                />
            </HStack>
        </>
    )
}

export default ChatBox