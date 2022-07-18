import AsyncStorage from "@react-native-async-storage/async-storage";

export const setItem = async (item, value) => {
    try {
        await AsyncStorage.setItem(item, JSON.stringify(value));
    } catch (error) {
        console.log("Data Store Error", error)
        return null;
    }
}