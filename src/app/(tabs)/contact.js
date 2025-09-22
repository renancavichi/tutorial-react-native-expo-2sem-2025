import { View, Text, Button, StyleSheet } from 'react-native'
import { useRouter } from 'expo-router'
import { useState, useEffect } from 'react'
import CardUser from '../../components/CardUser'
import { useUserStore } from '../../stores/useUserStore'

export default function Contact() {

    const router = useRouter()
    const {users, setUsers} = useUserStore()
    
    useEffect(() => {
        const listUsers = async () => {
            const response = await fetch("http://localhost:3333/profile")
            if(response.ok){
                console.log("Lista carregada com sucesso")
                const data = await response.json()
                console.log(data.profiles)
                setUsers(data.profiles)
            } else {
                console.log("Erro ao carregar lista")
            }
        }
        listUsers()
    } , [])

    return (
        <View style={styles.container}>
            <Text>Página de Contato</Text>
            {users.map((user) => (
                <CardUser 
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    avatar={user.avatar}
                />
            ))}
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