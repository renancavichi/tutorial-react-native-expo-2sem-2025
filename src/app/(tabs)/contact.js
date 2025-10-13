import { View, Text, Button, StyleSheet, FlatList } from 'react-native'
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
            <FlatList
                data={users}
                renderItem={({item}) => <CardUser 
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    email={item.email}
                    avatar={item.avatar}
                />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    }
})