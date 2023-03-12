import { StatusBar } from 'expo-status-bar';

// Import component เพิ่มเติม
import { NativeBaseProvider, Box, HStack, Text, VStack } from "native-base";

// import component chat history
import ChatHistory from './components/ChatHistory';

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
          
          {/* แสดง chathistory โดยกำหนดกินพื้นที่ 1 ช่องจากทั้งหมด */}
          <ChatHistory flex={1}/>

        </VStack>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}