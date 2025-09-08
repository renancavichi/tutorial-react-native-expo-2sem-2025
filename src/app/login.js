import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

export default function Login() {

    const router = useRouter()

    return (
        <View style={styles.container}>
            <Text>Inicializador</Text>
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