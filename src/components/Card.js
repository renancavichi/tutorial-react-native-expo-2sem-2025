import { View, Text, StyleSheet } from 'react-native'
import {Image} from 'expo-image'

function Card({title, desc, img}) {

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
          style={styles.image}
          source={img}
        />
        <View style={styles.info}>
          <Text style={styles.h1}>{title}</Text>
          <Text>{desc}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#b62121ff",
  },
  card: {
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    gap: 15,
    backgroundColor: "#b8eef0ff"
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

export default Card