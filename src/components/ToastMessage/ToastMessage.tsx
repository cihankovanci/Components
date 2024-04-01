import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import VerticalNotificationContainer from './VerticalNotificationContainer'
import { TouchableOpacity } from 'react-native-gesture-handler';


type Props = {
  onClose?: () => void;
  closeTimeout?: number;
};

const ToastMessage = ({onClose, closeTimeout}: Props) => {


  return (
    <VerticalNotificationContainer onClose={onClose} style={styles.card} threshold={80} closeTimeout={closeTimeout}  >


      <Text style={styles.title}>Notification card</Text>
      <Text style={styles.body}>Drag me 👆 and 👇</Text>


    </VerticalNotificationContainer>
  )
}

export default ToastMessage

const styles = StyleSheet.create({
  card: {

 
    backgroundColor: '#113',
    borderRadius: 30,
    elevation: 10,
    padding: 20,
    margin: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
  },
  body: {
    color: 'white',
    fontSize: 18,
    paddingBottom: 40,
  },
})