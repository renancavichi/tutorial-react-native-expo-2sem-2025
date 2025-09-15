import { View, Text, StyleSheet } from 'react-native'
import {Image} from 'expo-image'

function CardUser({name, email, avatar}) {

  return (
    <View style={styles.card}>
      <Image 
        style={styles.image}
        source={avatar}
      />
      <View style={styles.info}>
        <Text style={styles.h1}>{name}</Text>
        <Text>{email}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    width: '90%',
    padding: 10,
    flexDirection: 'row',
    gap: 15,
    backgroundColor: "#b8eef0ff",
    borderRadius: 10,
    marginBottom: 15
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