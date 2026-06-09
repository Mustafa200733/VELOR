import { View, Text, StyleSheet, Image } from 'react-native'
export default function Contact() {
  return (
    <View>
      <Text>Contact</Text>
 <Image
        source={require('./images/loc.png')}
        style={styles.image}
      />

       <Image
        source={require('./images/tel.png')}
        style={styles.image}
      />
       <Image
        source={require('./images/mail.png')}
        style={styles.image}
      />
    </View>
  )
}
const styles = StyleSheet.create({




});