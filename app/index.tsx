import { View, StyleSheet, FlatList, Pressable, Text, BackHandler } from 'react-native';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { Play, Youtube, Gamepad2, Video, Lock } from 'lucide-react-native';

const APPROVED_APPS = [
  { id: '1', name: 'YouTube Kids', icon: Youtube, color: '#FF4B4B', gradient: ['#FF4B4B', '#FF9D9D'] },
  { id: '2', name: 'Games', icon: Gamepad2, color: '#4CAF50', gradient: ['#4CAF50', '#8BC34A'] },
  { id: '3', name: 'Videos', icon: Video, color: '#2196F3', gradient: ['#2196F3', '#03A9F4'] },
  { id: '4', name: 'Learning', icon: Play, color: '#9C27B0', gradient: ['#9C27B0', '#E1BEE7'] },
];

export default function Home() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      router.push('/pin');
      return true;
    });

    return () => backHandler.remove();
  }, []);

  const renderApp = ({ item, index }) => {
    const Icon = item.icon;
    const isSelected = index === selectedIndex;

    return (
      <Pressable
        onFocus={() => setSelectedIndex(index)}
        style={[styles.appItem, isSelected && styles.selectedItem]}>
        <LinearGradient
          colors={item.gradient}
          style={[
            styles.iconContainer,
            isSelected && styles.selectedIconContainer,
          ]}>
          <Icon size={48} color="white" strokeWidth={2.5} />
        </LinearGradient>
        <Text style={[
          styles.appName,
          isSelected && styles.selectedAppName
        ]}>{item.name}</Text>
      </Pressable>
    );
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#6200EA', '#1A237E', '#311B92']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <View style={styles.header}>
        <Text style={styles.title}>Kids TV</Text>
        <Pressable
          onPress={() => router.push('/pin')}
          style={styles.exitButton}>
          <Lock size={24} color="white" />
        </Pressable>
      </View>
      <FlatList
        data={APPROVED_APPS}
        renderItem={renderApp}
        numColumns={2}
        contentContainerStyle={styles.grid}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginTop: 20,
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontFamily: 'Nunito-Bold',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  exitButton: {
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12,
  },
  grid: {
    padding: 20,
  },
  appItem: {
    flex: 1,
    margin: 12,
    alignItems: 'center',
  },
  selectedItem: {
    transform: [{ scale: 1.1 }],
  },
  iconContainer: {
    width: 130,
    height: 130,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  selectedIconContainer: {
    borderColor: 'white',
    borderWidth: 4,
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 12,
  },
  appName: {
    fontSize: 20,
    color: 'rgba(255, 255, 255, 0.9)',
    fontFamily: 'Nunito-Regular',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  selectedAppName: {
    color: 'white',
    fontFamily: 'Nunito-Bold',
    fontSize: 22,
    textShadowRadius: 4,
  },
});