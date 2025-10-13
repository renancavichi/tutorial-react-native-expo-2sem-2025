import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Login() {

    const router = useRouter()

    const handleLogin = async () => {
        //TODO: Fazer login
        await AsyncStorage.setItem('logado', 'true')
        router.replace('/home')
    }

    return (
        <View style={styles.container}>
            <Text>Inicializador</Text>

            <Button 
                title='Logar'
                onPress={handleLogin}
            />

            <Button 
                title='Cadastro'
                onPress={() => router.push('/signup')}
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