import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Animated,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import type {PropsWithChildren} from 'react';
import type {ViewStyle} from 'react-native';
import React, {useRef, useEffect} from 'react';
// navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';

type HomeProps = NativeStackScreenProps<RootStackParamList>;

type FadeInViewProps = PropsWithChildren<{style: ViewStyle}>;
const FadeInView: React.FC<FadeInViewProps> = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};
export default function HomePage({navigation}: HomeProps) {
  return (
//     <SafeAreaView>
//  <ScrollView>
    
//     </ScrollView>
//     </SafeAreaView>
    <ScrollView>
        <View
        style={{
          backgroundColor: '#000',
        }}>
        <View style={styles.container}>
          <Image
            source={{
              uri: 'https://res.cloudinary.com/dtbz1n84e/image/upload/v1725442089/letter-s_kfo59e.png',
            }}
            style={styles.logo}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate('Slider')}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/dtbz1n84e/image/upload/v1725447525/preferences_m9zpvo.png',
              }}
              style={styles.logo}
            />
          </TouchableOpacity>
        </View>
        <FadeInView style={styles.headingContainer}>
          <Text style={styles.headingText}>
            Hi! My name is Shakti kashyap, I am a fullstack Developer.
          </Text>
        </FadeInView>
        <View style={styles.mainCircleContainer}>
          <View style={styles.circleContainer}>
            <View style={styles.circleOne}>
              <View style={styles.circleTwo}>
                <View style={styles.circleThree}>
                  <View style={styles.circleFour}></View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
   
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headingText: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    fontWeight: '600',
    fontSize: 45,
    color: '#fff',
    letterSpacing: 0.3,
  },
  headingContainer: {
    justifyContent: 'center',
  },
  mainCircleContainer: {
    alignItems: 'flex-start',
    left: 125,
    top: 175,
  },
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  circleOne: {
    height: 500,
    width: 500,
    borderRadius: 250, // 400 / 2
    backgroundColor: '#F18505',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleTwo: {
    height: 400,
    width: 400,
    borderRadius: 200, // 300 / 2
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleThree: {
    width: 300,
    height: 300,
    borderRadius: 150, // 200 / 2
    backgroundColor: '#C83C32',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circleFour: {
    width: 200,
    height: 200,
    borderRadius: 100, // 100 / 2
    backgroundColor: '#000',
  },
});
