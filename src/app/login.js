import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native'
import { useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useState } from 'react'
import { useAuthStore } from '../stores/useAuthStore'

export default function Login() {

    const router = useRouter()
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const { login } = useAuthStore()

    const handleLogin = async () => {
        const data = {
            email,
            pass
        }

        const response = await fetch("http://localhost:3333/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })

        if(response.ok){
            const userLogged = await response.json()
            console.log("Logado com sucesso!", userLogged)
            login(userLogged)
            await AsyncStorage.setItem('userLogged', JSON.stringify(userLogged))
            router.replace('/home')
        } else {
            const { message } = await response.json()
            console.log("Erro ao logar!", message)
            Alert.alert("Erro ao Entrar", message || "Não foi possível fazer o login.")
        }
    }

    return (
        <View style={styles.container}>

        <Text style={styles.title}>Entrar</Text>

        <View style={{ width: '80%' }}>
            <Text style={styles.label}>Email:</Text>
            <TextInput 
                style={styles.input}
                value={email}
                onChangeText={setEmail}
            />
            <Text style={styles.label}>Senha:</Text>
            <TextInput 
                style={styles.input}
                value={pass}
                onChangeText={setPass}
                secureTextEntry
            />
        </View>
            <View style={{ marginTop: 20 }}>
                <Button 
                    title='Entrar'
                    onPress={handleLogin}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    label:{
        marginTop: 10
    },
    input: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 5,
        backgroundColor: '#fff',
    }
})