import { View, Text, StyleSheet, Image } from 'react-native'
export default function Creme() {
  return (
    <View>
      <Text>CrèmeBrûlée</Text>
      <Image
              source={require('./images/brulee.png')}
              style={styles.image}
            />
    </View>
  )
}
const styles = StyleSheet.create({
    image: {
    width: 200, 
    height: 200,
  },
}); 