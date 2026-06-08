import { View, Text, Image, StyleSheet } from 'react-native'
export default function GegrildeZalm() {
  return (
    <View>
      <Text>GegrildeZalm</Text>
      <Image
              source={require('./images/zalm.png')}
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