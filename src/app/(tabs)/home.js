import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Card from '../../components/Card'
import { Link } from 'expo-router'

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <View>
        <Link href="contact"><Text>Contato</Text></Link>
        <Link href="about"><Text>Sobre</Text></Link>
      </View>
      <View style={styles.content}>
        <Card 
          title="House of Dragons"
          desc="Guerra pelo trono com Dragões"
          img="https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        />
        <Card
          title="Lord of The Rings"
          desc="Batalha contra Sauron na Terra Média"
          img="https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_.jpg"
        />
        <Card
          title="Dexter"
          desc="O serial killer de seriais killers"
          img="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS0GcZEwXB7mvH56j8UXR8eUi3pF13hheM_f4-SlkFhjBx1LwpwXn7AbVm4_oXtluWZtf6GAw"  
        />
        <Card 
          title="House of Dragons"
          desc="Guerra pelo trono com Dragões"
          img="https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        />
        <Card
          title="Lord of The Rings"
          desc="Batalha contra Sauron na Terra Média"
          img="https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_.jpg"
        />
        <Card
          title="Dexter"
          desc="O serial killer de seriais killers"
          img="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS0GcZEwXB7mvH56j8UXR8eUi3pF13hheM_f4-SlkFhjBx1LwpwXn7AbVm4_oXtluWZtf6GAw"  
        />
        <Card 
          title="House of Dragons"
          desc="Guerra pelo trono com Dragões"
          img="https://m.media-amazon.com/images/M/MV5BM2QzMGVkNjUtN2Y4Yi00ODMwLTg3YzktYzUxYjJlNjFjNDY1XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        />
        <Card
          title="Lord of The Rings"
          desc="Batalha contra Sauron na Terra Média"
          img="https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_.jpg"
        />
        <Card
          title="Dexter"
          desc="O serial killer de seriais killers"
          img="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS0GcZEwXB7mvH56j8UXR8eUi3pF13hheM_f4-SlkFhjBx1LwpwXn7AbVm4_oXtluWZtf6GAw"  
        />
      </View>
      <Footer />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#ffffffff"
  },
  content: {
    flex: 7,
    width: "100%",
    backgroundColor: "#f19f32ff",
    padding: 15,
    gap: 15
  }
}) 