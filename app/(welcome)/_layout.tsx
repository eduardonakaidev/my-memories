import { Stack } from "expo-router"
import { View ,Text} from "react-native"

export default function WelcomeLayout() {
    return (
        <Stack screenOptions={{
            headerTitle: () => (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Welcome</Text>
              </View>
            )
          }}>
            <Stack.Screen name="index" options={{title:"Welcome"}}/>
        </Stack>
    )
}