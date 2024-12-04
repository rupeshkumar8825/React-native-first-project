import React from "react";

import { 
    SafeAreaView,
    Text, 
    View, 
    StyleSheet, 
    useColorScheme
} from "react-native";


// making the functional component for this purpose
const AppPro = () => {
    // defining the color scheme for this purpose
    const isDarkMode = useColorScheme() === 'light';
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <Text>Hello World1</Text>
                <Text>Hello World2</Text>
                <Text>Hello World3</Text>
                <Text style={isDarkMode ? styles.darkText : styles.whiteText}>Hello World4 from appprop component</Text>
            </View>
        </SafeAreaView>
    )
}


// creating our own stylesheet for this purpose
const styles = StyleSheet.create({
    container: {
        flex : 1, 
        alignItems : "center"
    }, 
    whiteText : {
        color : "#FFFFFF"
    }, 
    darkText: {
        color : "#000000"
    }
})

// say everything went fine 
export default AppPro;