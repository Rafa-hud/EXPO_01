import AsyncStorage from '@react-native-async-storage/async-storage';


//Guardar los valores
export const storeData = async (key: string, value: string) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue);

        
    } catch (error) {
       console.log('Error al guardar los datos', error);
        
    }
}


//Obtener los valores
export const getData = async (key: string) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
        
    } catch (error) {
        console.log('Error al obtener los datos', error);
        
    }
}


//Eliminar los valores
export const removeData = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
        
    } catch (error) {
        console .log('Error al eliminar los datos', error);
    }
}


//Limpiar todos los valores
export const clearData = async () => {
    try {
        await AsyncStorage.clear();
        
    } catch (error) {
        console.log('Error al limpiar los datos', error);
        
    }
}