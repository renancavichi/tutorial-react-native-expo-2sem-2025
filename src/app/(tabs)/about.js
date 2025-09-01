import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'

export default function About() {

    const router = useRouter()

    return (
        <View style={styles.container}>
            <Text>Sobre</Text>
            <Button 
                title='Home'
                onPress={() => router.navigate('/')}
            />
            <Button 
                title='Contato'
                onPress={() => router.push('/contact')}
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