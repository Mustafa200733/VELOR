import { View, Text, Image, StyleSheet } from 'react-native'
export default function Tiramisu() {
  return (
    <View>
      <Text>Tiramisu</Text>
      <Image
              source={require('./images/Tiramisu.png')}
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