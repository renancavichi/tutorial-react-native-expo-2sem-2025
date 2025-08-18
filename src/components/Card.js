import { View, Text, StyleSheet } from 'react-native';

function Card() {
  return (
    <View style={styles.card}>
        <View style={styles.image}></View>
        <View style={styles.info}>
            <Text style={styles.title}>Lord of The Rings</Text>
            <Text>Uma série de aventura sobre pequenos aventureiros que mudaram a história da Terra Média</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
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
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
}) 

export default Card