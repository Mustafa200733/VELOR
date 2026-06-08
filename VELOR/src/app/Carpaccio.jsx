import { View, Text, StyleSheet, Image  } from 'react-native'
export default function Carpaccio() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Carpaccio</Text>
      <Text style={styles.ingredients}>Ingrediënten: Rauwe rundvlees, Parmezaanse kaas, Olijfolie, Citroos, Basilicum</Text>
      <Image source={require('./images/carpacio.png')}  
      style={styles.image}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
    backgroundColor: '#FAF8F5',
    
    },

 title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2F2F2F',
    top: 100,
    left: 50,
  },

  ingredients: {
    fontSize: 16,
    color: '#666',
    top: 120,
    left: 50,
  },

    image: {
    width: '45%',
    height: 580,
    resizeMode: 'cover',
    top: 11,
    left: 845,
    },
}); 