import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function Profile() {

    const router = useRouter()


    const handleLogout = async () => {
        await AsyncStorage.removeItem('logado')
        router.replace('/login')
    }

    return (
        <View style={styles.container}>
            <Text>Página de Perfil</Text>
            <Button 
                title='Home'
                onPress={() => router.navigate('/')}
            />
            <Button 
                title='Sobre'
                onPress={() => router.push('/about')}
            />
            <Button 
                title='Logout'
                onPress={handleLogout}
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