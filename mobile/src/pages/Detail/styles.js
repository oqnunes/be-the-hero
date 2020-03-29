import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 18,
    color: '#737390'
  },

  headerTextBold: {
    fontWeight: 'bold'
  },

  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginTop: 30,
  },

  incidentProperty:{
    fontSize: 18,
    color: '#41414D',
    fontWeight: 'bold'
  },

  incidentValue: {
    marginTop: 8,
    fontSize: 16,
    marginBottom: 24,
    color: '#737380'
  },

  contactBox: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginTop: 38,
  },

  heroTitle: {
    fontWeight: 'bold',
    fontSize: 22,
    lineHeight: 32
  },
  
  heroDescription: {
    fontSize: 18,
    color: '#737380',
    marginTop: 16 
  },

  actions: {
    marginTop: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  action: {
    backgroundColor: '#e02041',
    borderRadius: 8,
    height: 50,
    width: '48%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  actionText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }

});