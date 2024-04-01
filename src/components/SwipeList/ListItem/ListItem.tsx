import React, {useRef} from 'react';
import {
  PanResponder,
  Animated,
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';


type Props = {
  scrollViewRef: React.RefObject<ScrollView>;
  text?: React.ReactNode;
  odd?: boolean;
  children?: React.ReactNode;
};

const THRESHOLD = 80;

const ListItem4 = ({scrollViewRef, odd, children}: Props) => {
  const release = (distance: number) => {
    Animated.spring(pan, {
      toValue: {x: distance, y: 0},
      useNativeDriver: false,
    }).start();
  };

  const pan = useRef(new Animated.ValueXY()).current;
  const panResponder = useRef(
    PanResponder.create({
      // onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: (_, gestureState) => {
        return Math.abs(gestureState.dx) > 20;
      },
      onPanResponderMove: (_event, gestureState) => {
        if (Math.abs(gestureState.dx) > Math.abs(gestureState.dy)) {
            console.log('enabled false')
          scrollViewRef.current?.setNativeProps({scrollEnabled: true});
        }
        if (gestureState.dx > THRESHOLD) {
          const newX = THRESHOLD + Math.sqrt(gestureState.dx - THRESHOLD);
          pan.setValue({x: newX, y: 0});
        } else if (gestureState.dx < -THRESHOLD) {
          const newX = -THRESHOLD - Math.sqrt(-THRESHOLD - gestureState.dx);
          pan.setValue({x: newX, y: 0});
        } else {
          pan.setValue({x: gestureState.dx, y: 0});
        }
      },
      onPanResponderRelease: (_event, gestureState) => {
        if (gestureState.dx > THRESHOLD / 2) {
          release(THRESHOLD);
        } else if (gestureState.dx < -THRESHOLD / 2) {
          release(-THRESHOLD);
        } else {
          release(0);
        }
        scrollViewRef.current?.setNativeProps({scrollEnabled: true});
      },
    }),
  ).current;

  const backgroundColor = pan.x.interpolate({
    inputRange: [-THRESHOLD, 0, THRESHOLD],
    outputRange: ['#409550', '#000000', '#bB4941'],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      {/* Background container */}
      <Animated.View style={[styles.background, {backgroundColor}]} />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => Alert.alert('Delete')}>
        <View style={[styles.iconContainer, styles.iconContainerLeft]}>
  <Text>Delete</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => Alert.alert('Archive')}>
        <View style={[styles.iconContainer, styles.iconContainerRight]}>
       <Text>Archive</Text>
        </View>
      </TouchableOpacity>
      <Animated.View
        style={[
          styles.item,
          odd ? styles.itemEven : styles.itemOdd,
          {transform: [{translateX: pan.x}, {translateY: pan.y}]},
        ]}
        {...panResponder.panHandlers}>
          {children}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 100,
    justifyContent: 'center',
    width: '100%',
    padding:5,
    marginVertical: 5,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
  },
  item: {
    height: 100,
    justifyContent: 'center',
    width: '100%',
  },
  itemEven: {
    backgroundColor: '#1d1d20',
  },
  itemOdd: {
    backgroundColor: '#262628',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginLeft: 30,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: 80,
    height: 100,
  },
  iconContainerLeft: {
    left: 0,
  },
  iconContainerRight: {
    right: 0,
  },
});

export default ListItem4;