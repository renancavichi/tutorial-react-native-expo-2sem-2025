import { Image } from 'expo-image'
import { View, Text, StyleSheet } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo'

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logotipo}>
        <Image
          style={styles.image}
          source={require('../../assets/img/logo.svg')}
        />
        <Text style={styles.tipo}>Movie<Text style={{color: '#ff7b00'}}>Fy</Text></Text>
      </View> 
      <Entypo name="menu" size={30} color="#FFF" />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: "100%",
    backgroundColor: "#329bf1ff",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: "#050505ff"
  },
  menu: {
    width: 40,
    height: 40,
    backgroundColor: "#ffffffff"
  },
  image: { 
    width: 35, 
    height: 35
  },
  logotipo:{
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  },
  tipo: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold"
  }
}) 