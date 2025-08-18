import { View, Text, StyleSheet } from 'react-native'
import Header from './src/components/Header'
import Footer from './src/components/Footer'
import Card from './src/components/Card'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Card />
        <Card />
      </View>
      <Footer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#5bf13dff",
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    flex: 7,
    width: "100%",
    backgroundColor: "#f19f32ff",
    padding: 15,
    gap: 15
  },
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