import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// Import component เพิ่มเติม
import { NativeBaseProvider, Box, HStack, Text, Input, VStack, IconButton, Icon, FlatList } from "native-base";
// Import icon จาก FontAwesome
import { FontAwesome } from '@expo/vector-icons';

export default function App() {
  return (
    <NativeBaseProvider>
     
        <Box safeAreaTop bg Color="violet.800" />
        <HStack bg="violet.800" px="3" py="3" w="100%">
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>

        {/* สร้าง VStack เพื่อเรียง UI component ในแนวดิ่ง */}
        <VStack w="100%" flex={1}>
          {/* ใส่ FlatList สำหรับแสดง Chat history */}
          <FlatList flex={1}></FlatList>
          {/* สร้างแถบพิมพ์และส่งข้อความแชท 
          กำหนดระยะห่าง 2 หน่วยระหว่าง component และใส่ (p)adding ด้านละ 2 หน่วยทั้ง 4 ด้าน
          */}
          <HStack space={2} p={2}>
            {/* สร้่างช่องแชท กินพื้นที่ใน hstack 7 ช่อง */}
            <Input flex={7} placeholder="Talk to me..." />
            {/* สร้่างปุ่มส่งข้อความ กินพื้นที่ใน hstack 1 ช่อง */}
            <IconButton
              flex={1}
              borderRadius="sm"
              variant="solid"
              icon={<Icon as={FontAwesome} name="send" size="sm" />}
            />
          </HStack>
        </VStack>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}