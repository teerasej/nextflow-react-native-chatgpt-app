import { StatusBar } from 'expo-status-bar';

import { NativeBaseProvider, Box, HStack, Text, VStack } from "native-base";
import ChatHistory from './components/ChatHistory';

// import component chat box
import ChatBox from './components/ChatBox';

export default function App() {

  return (
    <NativeBaseProvider>
     
        <Box safeAreaTop bg Color="violet.800" />
        <HStack bg="violet.800" px="3" py="3" w="100%">
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>

        <VStack w="100%" flex={1}>
          <ChatHistory flex={1}/>

          {/* แสดง chatbox โดยไม่กำหนดค่า flex เพื่อให้ ChatHistory กินพื้นที่ที่เหลือทั้งหมด */}
          <ChatBox/>

        </VStack>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}