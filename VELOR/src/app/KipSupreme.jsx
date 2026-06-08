import { View, Text, Image, StyleSheet } from 'react-native'
export default function KipSupreme() {
  return (
    <View>
      <Text>KipSupreme</Text>
      <Image
              source={require('./images/KipSupreme.png')}
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