import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ToastMessage from '../../components/ToastMessage/ToastMessage'
import { SafeAreaView } from 'react-native-safe-area-context';

const Toast = () => {
  const [open, setOpen] = React.useState(true);

  return (
    <View style={{}}>
      <Text>Toast</Text>
      <View style={{height: 300}}/>
  {open && <ToastMessage onClose={() => setOpen(false)} />}
  <Text>Some content</Text>
  <TouchableOpacity
              activeOpacity={0.7}
              style={{backgroundColor: 'red', padding: 10, margin: 10, borderRadius: 10, alignItems: 'center'}}
              onPress={() => setOpen(true)}>
                
              <Text >Show Notification</Text>
            </TouchableOpacity>


          
    </View>
  )
}

export default Toast

const styles = StyleSheet.create({})