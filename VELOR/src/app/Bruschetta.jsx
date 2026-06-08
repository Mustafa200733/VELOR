import { View, Text, Image} from 'react-native';
import { StyleSheet } from 'react-native';
export default function Bruschetta() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bruschetta</Text>
       <Image
             source={require('./images/burseta.png')}
             style={styles.image}
           />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  text: {
    fontSize: 18,
    marginBottom: 8,
  },

    image: {
    width: 200,
    height: 200,
  },
});