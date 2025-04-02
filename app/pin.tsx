import { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import * as SecureStore from 'expo-secure-store';

const DEFAULT_PIN = '1234'; // In a real app, this would be set during initial setup

export default function PinScreen() {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handlePinInput = async (number: string) => {
    const newPin = pin + number;
    setPin(newPin);

    if (newPin.length === 4) {
      if (newPin === DEFAULT_PIN) {
        router.back();
      } else {
        setError('Incorrect PIN');
        setPin('');
        timeoutRef.current = setTimeout(() => {
          setError('');
        }, 2000);
      }
    }
  };

  const renderNumber = (number: string) => (
    <Pressable
      onPress={() => handlePinInput(number)}
      style={({ pressed }) => [
        styles.numberButton,
        pressed && styles.numberButtonPressed,
      ]}>
      <LinearGradient
        colors={['rgba(255, 255, 255, 0.3)', 'rgba(255, 255, 255, 0.1)']}
        style={styles.numberGradient}>
        <Text style={styles.numberText}>{number}</Text>
      </LinearGradient>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#6200EA', '#1A237E', '#311B92']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <Text style={styles.title}>Enter PIN to Exit</Text>
      <View style={styles.pinContainer}>
        {[1, 2, 3, 4].map((_, index) => (
          <View
            key={index}
            style={[
              styles.pinDot,
              index < pin.length && styles.pinDotFilled,
            ]}
          />
        ))}
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <View style={styles.numberPad}>
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0'].map(
          (number, index) => (
            <View key={index} style={styles.numberContainer}>
              {number && renderNumber(number)}
            </View>
          )
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    color: 'white',
    marginBottom: 40,
    fontFamily: 'Nunito-Bold',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  pinContainer: {
    flexDirection: 'row',
    marginBottom: 40,
  },
  pinDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    margin: 10,
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pinDotFilled: {
    backgroundColor: 'white',
    borderColor: 'white',
  },
  numberPad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 300,
  },
  numberContainer: {
    width: '33.33%',
    padding: 10,
    alignItems: 'center',
  },
  numberButton: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  numberGradient: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberButtonPressed: {
    transform: [{ scale: 0.95 }],
  },
  numberText: {
    fontSize: 28,
    color: 'white',
    fontFamily: 'Nunito-Bold',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  error: {
    color: '#FF6B6B',
    fontSize: 18,
    marginBottom: 20,
    fontFamily: 'Nunito-Regular',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});