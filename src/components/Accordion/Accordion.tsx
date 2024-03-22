import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Category} from '../../screens/Accordion/data';
import Chevron from '../Chevron/Chevron';
import Animated, {
  interpolate,
  measure,
  runOnUI,
  useAnimatedRef,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

type Props = {
  value: Category;
};

const Accordion = ({value}: Props) => {
  const listRef = useAnimatedRef<Animated.View>();
  const heightValue = useSharedValue(0);
  const open = useSharedValue(false);
  const progress = useDerivedValue(() =>
    open.value ? withTiming(1) : withTiming(0),
  );
  const heightAnimationStyle = useAnimatedStyle(() => ({
    height: interpolate(
      progress.value,
      [0, 1],
      [0, heightValue.value]
    ),
  }));
  return (
    <View style={styles.container}>
    <Pressable
        style={styles.titleContainer}
        onPress={() => {
            if (heightValue.value === 0) {
                runOnUI(() => {
                    'worklet';
                    const refHeight = measure(listRef)?.height; // Add null check
                    if (refHeight) {
                        heightValue.value = refHeight;
                    }
                })();
            }
            open.value = !open.value;
        }}>
        <Text style={styles.textTitle}>{value.title}</Text>
        <Chevron progress={progress} />
    </Pressable>
      <Animated.View style={heightAnimationStyle}>
        <Animated.View ref={listRef} style={styles.contentContainer}>
          {value.content.map((v, i) => {
            return (
              <View key={i} style={styles.content}>
                <Text style={styles.textContainer}>{v}</Text>
              </View>
            );
          })}
        </Animated.View>
      </Animated.View>
    </View>
  );
};

export default Accordion;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E3EDFB',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#0F56B3',
    overflow: 'hidden',
  },
  titleContainer: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0F56B3',
  },
  contentContainer: {
    position: 'absolute',
    top: 0,
    width: '100%',
  },
  content: {
    padding: 20,
    backgroundColor: '#D6E1F0',
  },
  textContainer: {
    fontSize: 14,
    color: 'black',
  },
});
