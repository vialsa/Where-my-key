import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#333',
  },
  input: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#CCC',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 25,
    width: '80%',
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: '#007AFF',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 200,
    marginBottom: 50,
    color: '#333',
  },
  forgotPassword: {
    color: '#00008b',
    marginTop: 10,
    textDecorationLine: 'underline',
  },
  register: {
    color: '#00008b',
    marginTop: 15,
    textDecorationLine: 'underline',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'transparent',
  },
  checkboxText: {
    color: '#333',
    fontSize: 16,
    marginLeft: 8,
  },
});
