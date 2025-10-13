import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Initializer() {

    const router = useRouter()

    useEffect(() => {
        const checkLogin = async () => {
            const isLogged = await AsyncStorage.getItem('logado')
            if(isLogged === 'true'){
                router.replace('/home')
            } else {
                router.replace('/login')
            }
        }

        checkLogin()
    }, [])

    return (
        <View style={styles.container}>
            <Text>Inicializador</Text>
            <Button 
                title='Login'
                onPress={() => router.navigate('/login')}
            />
            <Button 
                title='Home'
                onPress={() => router.navigate('/home')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})