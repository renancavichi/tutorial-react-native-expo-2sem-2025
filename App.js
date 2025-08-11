import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Logo</Text>
        <View style={styles.menu}></View>
      </View>
      <View style={styles.content}>
        <Text>Box 2</Text>
      </View>
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
  header: {
    flex: 1,
    width: "100%",
    backgroundColor: "#329bf1ff",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20
  },
  content: {
    flex: 7,
    width: "100%",
    backgroundColor: "#f19f32ff"
  },
  menu: {
    width: 40,
    height: 40,
    backgroundColor: "#050505ff"
  }
}) 