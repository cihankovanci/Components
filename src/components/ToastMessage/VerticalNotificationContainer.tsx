import React, { useEffect, useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  PanResponder,
  Animated,
  Dimensions,
  ViewStyle,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    zIndex: 2000,
    justifyContent: 'flex-end',
    position: 'absolute',
    width: '100%',
  },
});

const { height: SCREEN_HEIGHT } = Dimensions.get('window');

type Props = {
  children: React.ReactNode;
  style: ViewStyle;
  threshold: number;
  onClose?: () => void;
  closeTimeout?: number;
};

const VerticalNotificationContainer = ({
  children,
  style,
  threshold,
  onClose = () => {},
  closeTimeout = 3000,
}: Props) => {
  const pan = useRef<Animated.Value>(new Animated.Value(-SCREEN_HEIGHT)).current;
  const closeTimer = useRef<NodeJS.Timeout | null>(null);
  const [panEnabled, setPanEnabled] = useState(true);

  useEffect(() => {
    Animated.timing(pan, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    // Start timer to close notification after specified time
    if (closeTimeout && closeTimeout > 0) {
      closeTimer.current = setTimeout(() => {
        closeNotification();
      }, closeTimeout);
    }

    // Cleanup on unmount
    return () => {
      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  const closeNotification = () => {
    setPanEnabled(false);
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }
    Animated.timing(pan, {
      toValue: -SCREEN_HEIGHT,
      duration: 300,
      useNativeDriver: true,
    }).start(onClose);
  };

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => panEnabled,
      onPanResponderGrant: () => {},
      onPanResponderMove: (_, gestureState) => {
        const newY =
          gestureState.dy > 0 ? Math.sqrt(gestureState.dy) : gestureState.dy;

        Animated.event([null, { dy: pan }], {
          useNativeDriver: false,
        })(_, { dy: newY });
      },
      onPanResponderRelease: (_, gestureState) => {
        pan.flattenOffset();
        if (gestureState.dy < -threshold) {
          // Dragging exceeds threshold, close notification
          closeNotification();
        } else {
          // Dragging is less than threshold, animate notification back to start position
          Animated.spring(pan, {
            toValue: 0,
            useNativeDriver: true,
            friction: 5,
          }).start();
        }
      },
    }),
  ).current;

  return (
    <View style={styles.container}>
      <Animated.View
        style={[style, { transform: [{ translateY: pan }] }]}
        {...panResponder.panHandlers}>
        {children}
      </Animated.View>
    </View>
  );
};

export default VerticalNotificationContainer;
