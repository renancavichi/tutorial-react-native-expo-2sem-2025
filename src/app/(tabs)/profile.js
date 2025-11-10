import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useAuthStore } from '../../stores/useAuthStore'
import { Image } from 'expo-image'

export default function Profile() {

    const router = useRouter()
    const {profile, logout} = useAuthStore()


    const handleLogout = async () => {
        await AsyncStorage.removeItem('userLogged')
        logout()
        router.replace('/login')
    }

    return (
        <View style={styles.container}>
            <Image 
                source={profile?.avatar || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'} 
                style={{width: 100, height: 100, borderRadius: 50, marginBottom: 20}} 
            />
            <Text>{profile.name}</Text>
            <Text>{profile.email}</Text>
            
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