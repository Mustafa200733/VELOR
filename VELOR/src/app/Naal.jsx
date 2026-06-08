import { View, Text, Image, StyleSheet } from 'react-native'
export default function Garnaal() {
  return (
    <View>
      <Text>Garnaal</Text>
         <Image
                    source={require('./images/garnaal.png')}
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