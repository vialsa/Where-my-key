import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  menuImage: {
    width: 30,
    height: 30,
  },
  cabecalho: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 40,
  },
  cabecalhoText: {
    fontSize: 20,
    fontWeight: 'normal',
    flex: 1,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
    marginHorizontal: 20,
    color: '#333',
  },
  list: {
    flex: 1,
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  item: {
    fontSize: 16,
    marginBottom: 10,
    color: '#333',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 20,
    marginHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  searchInput: {
    flex: 1,
    marginRight: 10,
    fontSize: 16,
    color: '#333',
  },
  seachImage: {
    width: 20,
    height: 20,
    tintColor: '#666',
  },
});
