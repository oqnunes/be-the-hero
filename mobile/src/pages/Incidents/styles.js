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

  title: {
    fontSize: 30,
    marginBottom: 16,
    marginTop: 48,
    color: '#13131a',
    fontWeight: 'bold'
  },

  description: {
    fontSize: 20,
    lineHeight: 28,
    color: '#737380'
  },
  
  incidentList: {
    marginTop: 32
  },
  
  incident: {
    padding: 24,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 16
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

  detailsButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  detailsText: {
    fontSize: 18,
    color: '#e02041',
    fontWeight: 'bold'
  }
});