import { View, Text, StyleSheet, Pressable } from 'react-native'
import {Image} from 'expo-image'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import Feather from '@expo/vector-icons/Feather'
import { useRouter } from 'expo-router'
import { useUserStore } from '../stores/useUserStore'

function CardUser({id, name, email, avatar}) {

  const router = useRouter()
  const {users, setUsers} = useUserStore()

  const handleDelete = async () => {
    const response = await fetch(`http://localhost:3333/profile/${id}`, {
        method: "DELETE",
    })
    if(response.ok){
        console.log("Deletado com sucesso")
        const updatedUsers = users.filter(user => user.id !== id) // cria um novo array sem o id que foi excluído
        setUsers(updatedUsers) 
        console.log("Erro ao deletar")
    }
  }

  const handleEdit = () => {
    router.push({
      pathname: '/edituser',
      params: { id, name, email, avatar }
    })
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
          style={styles.image}
          source={avatar}
        />
        <View style={styles.info}>
          <Text style={styles.h1}>{name}</Text>
          <Text>{email}</Text>
        </View>
        <View>
          <Pressable onPress={handleEdit}>
            <Feather name="edit" size={24} color="black" />
          </Pressable>
          <Pressable onPress={handleDelete}>
            <FontAwesome name="trash" size={24} color="black" />
          </Pressable>

          
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15
  },
  card: {
    width: '90%',
    padding: 10,
    flexDirection: 'row',
    gap: 15,
    backgroundColor: "#b8eef0ff",
    borderRadius: 10,
  },
  image: {
    width: 50,
    height: 60,
    backgroundColor: "#000"
  },
  info: {
    flex: 1,
    flexDirection: 'column',
  },
  h1: {
    fontSize: 20,
    fontWeight: 'bold'
  }
})

export default CardUser