import { View, Text, Image, StyleSheet } from 'react-native';

export default function Cheesecake() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cheesecake</Text>
            <Text style={styles.text}></Text>

      <Image
        source={require('./images/Cheesecake.png')}
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