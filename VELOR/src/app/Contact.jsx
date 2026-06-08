import { View, Text, StyleSheet } from 'react-native'
export default function Contact() {
  return (
    <View>
      <Text>Contact</Text>
      {/* <Image
              source={require('./images/contact.png')}
              style={styles.image}
            /> */}
    </View>
  )
}
const styles = StyleSheet.create({
    image: {
    width: 200, 
    height: 200,
  },
}); 