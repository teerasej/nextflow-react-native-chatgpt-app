import { StatusBar } from 'expo-status-bar';

import { NativeBaseProvider, Box, HStack, Text, VStack, KeyboardAvoidingView } from "native-base";
import ChatHistory from './components/ChatHistory';
import ChatBox from './components/ChatBox';

// เรียกใช้ provider และ store
import { Provider } from 'react-redux';
import store from "./redux/store";

export default function App() {

  return (
    // ครอบ component ทั้งหมดด้วย Provider ที่มีการใส่ store ลงไปใช้งาน
    <Provider store={store}>
      <NativeBaseProvider>
        <Box safeAreaTop bg Color="violet.800" />
        <HStack bg="violet.800" px="3" py="3" w="100%">
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <KeyboardAvoidingView behavior='padding' flex={1}>
          <VStack w="100%" flex={1}>
            <ChatHistory flex={1} />
            <ChatBox />
          </VStack>
        </KeyboardAvoidingView>
        <Box safeAreaBottom />
        <StatusBar style="auto" />
      </NativeBaseProvider>
    </Provider>

  );
}