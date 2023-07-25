import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { HStack, Icon, IconButton, Input } from 'native-base'
import { FontAwesome } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';

import { addUserMessage } from './../redux/chatHistorySlice';

const ChatBox = () => {

    const [chatMessage, setChatMessage] = useState("")

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
                        addUserMessage(chatMessage);
                        
                    }}
                />
            </HStack>
        </>
    )
}

export default ChatBox