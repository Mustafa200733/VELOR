import { View, Text, Image, StyleSheet } from 'react-native'
export default function PastaAlfredo() {
  return (
    <View>
      <Text>Pasta Alfredo</Text>
      <Image
              source={require('./images/pasta.png')}
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