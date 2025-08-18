import {View, Text, StyleSheet} from 'react-native'

export default function Header() {
  return (
    <View style={styles.header}>
        <Text>Logo</Text>
        <View style={styles.menu}></View>
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
    paddingHorizontal: 20
  },
  menu: {
    width: 40,
    height: 40,
    backgroundColor: "#050505ff"
  }
}) 