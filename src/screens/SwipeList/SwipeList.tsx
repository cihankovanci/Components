import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ListItem from '../../components/SwipeList/ListItem/ListItem';
import NotificationListItem from '../../components/SwipeList/ListItem/NotificationListItem';

const SwipeList = () => {
  const scrollViewRef = React.useRef<ScrollView>(null);

  const backgroundStyle = {
    backgroundColor: '#121212',
  };

  console.log(scrollViewRef)
  return (
      <SafeAreaView style={backgroundStyle}>
      <ScrollView
         contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}
        ref={scrollViewRef}
        >
        <View>
          <Text style={styles.title}>
            React Native Scrollview swipe for action
          </Text>
        </View>
       
        <ListItem text="🤖 Robot" scrollViewRef={scrollViewRef}>
        <NotificationListItem
        id={1}
        title={'title'}
        content={'content'}
        date={'date'}
        onPress={() => {}}
        readStatus={true}

      />
      
        </ListItem>
        <ListItem text="🤖 Robot" scrollViewRef={scrollViewRef}>
        <NotificationListItem
        id={1}
        title={'title'}
        content={'content'}
        date={'date'}
        onPress={() => {}}
        readStatus={true}

      />
      
        </ListItem>
        <ListItem text="🤖 Robot" scrollViewRef={scrollViewRef}>
        <NotificationListItem
        id={1}
        title={'title'}
        content={'content'}
        date={'date'}
        onPress={() => {}}
        readStatus={true}

      />
      
        </ListItem>
        <ListItem text="🤖 Robot" scrollViewRef={scrollViewRef}>
        <NotificationListItem
        id={1}
        title={'title'}
        content={'content'}
        date={'date'}
        onPress={() => {}}
        readStatus={true}

      />
      
        </ListItem>
        <ListItem text="🤖 Robot" scrollViewRef={scrollViewRef}>
        <NotificationListItem
        id={1}
        title={'title'}
        content={'content'}
        date={'date'}
        onPress={() => {}}
        readStatus={true}

      />
      
        </ListItem>
        <ListItem text="🤖 Robot" scrollViewRef={scrollViewRef}>
        <NotificationListItem
        id={1}
        title={'title'}
        content={'content'}
        date={'date'}
        onPress={() => {}}
        readStatus={true}

      />
      
        </ListItem>
        <ListItem text="🤖 Robot" scrollViewRef={scrollViewRef}>
        <NotificationListItem
        id={1}
        title={'title'}
        content={'content'}
        date={'date'}
        onPress={() => {}}
        readStatus={true}

      />
      
        </ListItem>
        <ListItem text="🤖 Robot" scrollViewRef={scrollViewRef}>
        <NotificationListItem
        id={1}
        title={'title'}
        content={'content'}
        date={'date'}
        onPress={() => {}}
        readStatus={true}

      />
      
        </ListItem>
        <ListItem text="🤖 Robot" scrollViewRef={scrollViewRef}>
        <NotificationListItem
        id={1}
        title={'title'}
        content={'content'}
        date={'date'}
        onPress={() => {}}
        readStatus={true}

      />
      
        </ListItem>
        <ListItem text="🤖 Robot" scrollViewRef={scrollViewRef}>
        <NotificationListItem
        id={1}
        title={'title'}
        content={'content'}
        date={'date'}
        onPress={() => {}}
        readStatus={true}

      />
      
        </ListItem>
        <ListItem text="🤖 Robot" scrollViewRef={scrollViewRef}>
        <NotificationListItem
        id={1}
        title={'title'}
        content={'content'}
        date={'date'}
        onPress={() => {}}
        readStatus={true}

      />
      
        </ListItem>
        <ListItem text="🤖 Robot" scrollViewRef={scrollViewRef}>
        <NotificationListItem
        id={1}
        title={'title'}
        content={'content'}
        date={'date'}
        onPress={() => {}}
        readStatus={true}

      />
      
        </ListItem>

      </ScrollView>
    </SafeAreaView>

  );
};

export default SwipeList;

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    padding: 30,
  },
});
