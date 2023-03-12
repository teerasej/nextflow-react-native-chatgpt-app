import { StatusBar } from 'expo-status-bar';
// Import safe area view
import { SafeAreaView, StyleSheet, View } from 'react-native';
// Import component เพิ่มเติม
import { NativeBaseProvider, Box, HStack, Text } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
        <SafeAreaView>
          {/* กำหนดพื้นที่ safe area และสี */}
          <Box safeAreaTop bgColor="violet.800"/>
            {/* กำหนดส่วนที่เป็น  header */}
            <HStack bg="violet.800" px="3" py="3" w="100%">
                {/* กำหนดข้อความ */}
                <Text color="white" fontSize="20" fontWeight="bold">
                    Home
                </Text>
            </HStack>

            
        </SafeAreaView>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}