import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";

export default function App(){
    return(
        <View Style={Styles.container}>
            <text>Open up App.js to start Working on your app!</text>
            <StatusBar style="auto" />
        </View>
    )
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
}); 