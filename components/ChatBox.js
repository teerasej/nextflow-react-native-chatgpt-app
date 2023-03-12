import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { HStack, Icon, IconButton, Input } from 'native-base'
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

// เรียกใช้ reducer function ในการสร้าง action object เพื่อส่งให้กับ redux
import { addUserMessage, fetchOpenAI } from './../redux/chatHistorySlice';

const ChatBox = () => {

    const [chatMessage, setChatMessage] = useState("")
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

                        const action = addUserMessage(chatMessage);
                        dispatch(action);

                        // Dispatch Async thunk action โดยการส่งข้อความเป็น prompt
                        const asyncThunkAction = fetchOpenAI(chatMessage);
                        dispatch(asyncThunkAction);

                        setChatMessage("");
                    }}
                />
            </HStack>
        </>
    )
}

export default ChatBox