import { View, Text } from 'react-native'
import React from 'react'

// Import component ที่จำเป็น
import { HStack, Icon, IconButton, Input } from 'native-base'

// Import icon จาก FontAwesome
import { FontAwesome } from '@expo/vector-icons';


const ChatBox = () => {

    return (
        <>
            <HStack space={2} p={2}>
                {/* สร้่างช่องแชท กินพื้นที่ใน hstack 7 ช่อง */}
                <Input flex={7} placeholder="Talk to me..."  />
                {/* สร้่างปุ่มส่งข้อความ กินพื้นที่ใน hstack 1 ช่อง */}
                {/* กำหนด Icon FontAwesome ชื่อ send */}
                <IconButton
                    flex={1}
                    borderRadius="sm"
                    variant="solid"
                    icon={<Icon as={FontAwesome} name="send" size="sm"
                    />}
                />
            </HStack>
        </>
    )
}

export default ChatBox