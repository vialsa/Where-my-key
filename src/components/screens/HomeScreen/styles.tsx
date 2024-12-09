import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
      },
      menuImage: {
        width: 50,
        height: 50,
      },
      cabecalho: {
        flexDirection: 'row',
        alignItems: 'center', 
        position: 'absolute',
        top: 50
      },
      cabecalhoText: {
        fontSize: 20,
        fontWeight: 'normal',
        marginHorizontal: 70,
      },
      subtitle: {
        fontSize: 22,
        fontWeight: 'bold',
        position: 'absolute',
        top: 170,
      },
      forgotPassword: {
        color: '#333',
        marginTop: 10,
        textDecorationLine: 'underline',
      },
      register: {
        color: '#333',
        marginTop: 15,
        textDecorationLine: 'underline',
      },
      list: {
        flex: 1,
        position: 'absolute',
        top: 370,
      },
      item: {
        fontSize: 16,
        marginBottom: 10,
      },
      searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFFE5',
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginBottom: 20,
        width: 350,
        position: 'absolute',
        top: 260,    
      },
      searchInput: {
        flex: 1,
        marginRight: 10,
      },
      seachImage: {
        width: 50,
        height: 50,
      }

});