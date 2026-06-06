import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TouchableOpacity,} from 'react-native';
import Nav from './Newnav';
import { Link } from 'expo-router';

export default function App() {

  return (
    <ImageBackground
      source={require('./images/home.png')}
      style={styles.backgroundImage}
      resizeMode="cover">
      <View style={styles.overlay}>
        <Nav />

        <View
          style={[
            styles.heroContent]}>
          <Text style={styles.eyebrow}>Restaurant & Lounge</Text>

          <Text
            style={[
              styles.welkom]}>
            WELKOM BIJ
          </Text>

          <Text
            style={[
              styles.velor ]}>
            VELOR
          </Text>

          <View style={styles.accentLine} />

          <Text style={styles.subtitle}>
            Een verfijnde culinaire ervaring waar gastronomie,
            sfeer en vakmanschap samenkomen.
          </Text>

          <TouchableOpacity activeOpacity={0.85} style={styles.button}>
            <Link style={styles.buttonText} 
              href="/Reserve"
            >RESERVEER EEN TAFEL</Link>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  overlay: {
    flex: 1,
    backgroundColor: 'rgba(8, 7, 5, 0.62)',
  },

  heroContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: 760,
    paddingHorizontal: 88,
    paddingBottom: 54,
  },

  heroContentSmall: {
    paddingHorizontal: 28,
    paddingBottom: 34,
  },

  eyebrow: {
    color: '#D4AF37',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 3,
    marginBottom: 16,
    textTransform: 'uppercase',
  },

  welkom: {
    color: '#FFFFFF',
    fontSize: 58,
    fontWeight: '800',
    lineHeight: 64,
    letterSpacing: 0,
    textTransform: 'uppercase',
  },

  welkomSmall: {
    fontSize: 38,
    lineHeight: 44,
  },

  velor: {
    color: '#D9B650',
    fontSize: 86,
    fontWeight: '900',
    lineHeight: 92,
    letterSpacing: 0,
  },

  velorSmall: {
    fontSize: 56,
    lineHeight: 62,
  },

  accentLine: {
    width: 96,
    height: 3,
    backgroundColor: '#D4AF37',
    borderRadius: 999,
    marginTop: 18,
  },

  subtitle: {
    color: '#F2EFE8',
    fontSize: 19,
    lineHeight: 31,
    marginTop: 24,
    maxWidth: 550,
    fontWeight: '400',
  },

  button: {
    marginTop: 38,
    backgroundColor: '#D4AF37',
    paddingVertical: 17,
    paddingHorizontal: 34,
    borderRadius: 4,
    alignSelf: 'flex-start',
    borderWidth: 1,
    borderColor: '#F1D77B',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.35,
    shadowRadius: 18,
    elevation: 8,
  },

  buttonText: {
    color: '#111111',
    fontSize: 14,
    fontWeight: '800',
    letterSpacing: 1,
  },
});
