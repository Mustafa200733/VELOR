import { View, Text, Image, StyleSheet } from 'react-native'
export default function SteakDeluxe() {
  return (
    <View>
      <Text>SteakDeluxe</Text>
       <Image
              source={require('./images/steakdeluxe.png')}
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