import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: 'center',
    width: '50%',
    marginVertical: 8,
  },
  gradient: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: 'center',
    width: '100%',
  },
  primary: {
    top: 110,
  },
  secondary: {
    backgroundColor: 'gray',
  },
  danger: {
    backgroundColor: '#EF232A',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
