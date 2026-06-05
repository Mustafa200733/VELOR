import { View, Text, StyleSheet } from 'react-native';

export default function Nav() {
  return (
    <View style={styles.navWrapper}>
      <View style={styles.navbar}>
        <Text style={styles.navText}>HOME</Text>
        <Text style={styles.navText}>MENU</Text>
        <Text style={styles.navText}>CONTACT</Text>
        <View style={styles.reserveButton}>
          <Text style={styles.reserveText}>RESERVEREN</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navWrapper: {
    width: '100%',
    paddingTop: 26,
    paddingHorizontal: 88,
    alignItems: 'flex-end',
  },

  navbar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: 1020,
    backgroundColor: 'rgba(10, 9, 7, 0.55)',
    borderWidth: 1,
    borderColor: 'rgba(212, 175, 55, 0.35)',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 28,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.22,
    shadowRadius: 14,
    elevation: 6,
  },

  navText: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '800',
    letterSpacing: 1,
    marginHorizontal: 24,
    
  },

  reserveButton: {
    backgroundColor: '#D4AF37',
    borderRadius: 4,
    marginLeft: 24,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#F1D77B',
  },

  reserveText: {
    color: '#111111',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 1,
  },
});
