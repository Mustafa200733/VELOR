import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import Nav from './Newnav';

export default function Menu() {
  return (
    <ScrollView style={styles.container}>
      <Nav />

      <Image
        source={require('./images/ijs.png')}
        style={styles.image}
      />

      <Text style={styles.texto}>ONS MENU</Text>

      <Text style={styles.textmet}>
        Met liefde bereid, speciaal voor u.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#ddd8d4',
  },

  texto: {
    fontSize: 88,
    marginTop: -670,
    color: '#C89B47',
    fontFamily: 'serif',
  },

  textmet: {
    fontSize: 18,
    color: '#333333af',
    marginTop: 20,
    left: 19,
    fontFamily: 'serif',
  },

  image: {
    width: 800,
    resizeMode: 'contain',
    left: 736,
    top: -138,
  },
});