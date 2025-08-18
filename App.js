import { View, Text, StyleSheet } from 'react-native'
import Header from './src/components/Header'
import Footer from './src/components/Footer'

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text>Content</Text>
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
    backgroundColor: "#f19f32ff"
  }
}) 