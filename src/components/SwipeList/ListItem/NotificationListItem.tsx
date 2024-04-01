import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';


type Props = {
    id: number;
    title: string;
    content: string;
    date: string;
    onPress: (id: number, title: string, content: string, date: string) => void;
    readStatus: boolean;
    };


const NotificationCard = ({id, title, content, date, onPress, readStatus}: Props) => {



  return (
    <TouchableOpacity
        disabled={false}
      style={{width: '100%', marginVertical: 5}}
      onPress={() =>
        typeof onPress === 'function' && onPress(id, title, content, date)
      }>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginLeft: 10,
        }}>
        {readStatus && (
          <View
            style={{
              width: 5,
              height: 5,
              borderRadius: 2.5,
              backgroundColor: '#FBBE16',
              marginRight: 10,
            }}
          />
        )}
        <Text style={[styles.Title, {color: 'white'}]}>
          {title === null ? content : title}
        </Text>
      </View>

      <View style={{width: '100%', marginLeft: 10}}>
        <Text style={{marginTop: 5, color: 'white'}}>
            {content === null ? title : content}
        </Text>
      </View>
      <Text
        style={{
          marginLeft: 10,
          fontSize: 12,
          color: '#8f8f8f',
          marginTop: 5,
        }}>
    {date}
      </Text>
    </TouchableOpacity>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  Title: {
    fontSize: 16,
    fontWeight: '600',
  },
});
