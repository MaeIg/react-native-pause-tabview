import React, { useEffect } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

export const Ring = () => {
  const ring = useSharedValue(0);

  const ringStyle = useAnimatedStyle(() => {
    return {
      opacity: 0.8 - ring.value,
      transform: [
        {
          scale: interpolate(ring.value, [0, 1], [0, 4]),
        },
      ],
    };
  });

  useEffect(() => {
    ring.value = withDelay(
      1000,
      withRepeat(
        withTiming(1, {
          duration: 4000,
        }),
        -1,
        false,
      ),
    );
  }, [ring]);

  return <Animated.View style={[styles.ring, ringStyle]} />;
};

const styles = StyleSheet.create({
  ring: {
    width: 20,
    height: 20,
    borderRadius: 40,
    borderColor: 'tomato',
    borderWidth: 10,
  },
});
