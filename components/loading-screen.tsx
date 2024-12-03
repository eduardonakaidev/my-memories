import { ActivityIndicator,Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoadingScreen(){
    return(
        <SafeAreaView style={{ flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: '#FFFFFF'}}>
        <ActivityIndicator size="large" color="#DB87D4" />
        <Text style={{ marginTop: 16,fontSize: 18,color: '#DB87D4'}}>
            app carregando...
            </Text>
      </SafeAreaView>
    )
}