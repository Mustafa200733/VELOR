import { View, Text, Image, StyleSheet } from 'react-native'
export default function Tomatensoep() {
  return (
    <View>
      <Text>Tomatensoep</Text>
      <Image
              source={require('./images/tomaat.png')}
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