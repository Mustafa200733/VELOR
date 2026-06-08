import { View, Text, Image, StyleSheet } from 'react-native'
export default function Geitenkaassalade() {
  return (
    <View>
      <Text>Geitenkaassalade</Text>
      <Image
              source={require('./images/geitenkaas.png')}
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