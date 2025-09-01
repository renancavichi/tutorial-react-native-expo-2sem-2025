import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

export default function Initializer() {

    const router = useRouter()

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