import { View, Text, Image, StyleSheet } from 'react-native'
export default function VanilleIjs() {
  return (
    <View>
      <Text
  style={styles.Text}
        >VanilleIjs</Text>
      <Image
              source={require('./images/chocoijs.png')}
              style={styles.image}
            />
    </View>
  )
}
const styles = StyleSheet.create({
    image: {
    width: 600,  
    height: 300,
    left:800 ,
    resizeMode:'cover'
  },



});  