import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

export default function Profile() {

    const router = useRouter()

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