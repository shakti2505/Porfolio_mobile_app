import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/FontAwesome'
import Icons2 from 'react-native-vector-icons/MaterialCommunityIcons'

// navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';


const Slider = () => {

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const openWebSite = (websitelink: string) => {
    Linking.openURL(websitelink);
  };
  return (
    <SafeAreaView>
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
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                source={{
                  uri: 'https://res.cloudinary.com/dtbz1n84e/image/upload/v1725527582/cross_1_g37z3t.png',
                }}
                style={styles.logo}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.NavContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('About')}>
              <Text style={styles.navLinks}>About</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('WorK')}>
              <Text style={styles.navLinks}>Work</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.navLinks}>Service</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("ContactForm")}>
              <Text style={styles.navLinks}>Contact</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.icons}>
            <TouchableOpacity
              onPress={() => {
                openWebSite('https://github.com/shakti2505/');
              }}>
              <Icons name='github' size={50} color='#F18505'  />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                openWebSite(
                  'https://www.linkedin.com/in/shakti-kashyap-3a4271222/',
                );
              }}>
             <Icons name='linkedin-square' size={50} color='#F18505'/>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                openWebSite('https://shaktikashyap.netlify.app/');
              }}>
             <Icons2 name='web' size={50} color='#F18505'/>
            </TouchableOpacity>
          </View>
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
    </SafeAreaView>
  );
};

export default Slider;

const styles = StyleSheet.create({
  logo: {
    width: 50,
    height: 50,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  NavContainer: {
    flex: 1,
    marginHorizontal: 16,
    marginVertical: 22,
  },
  navLinks: {
    fontSize: 40,
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 1,
  },

  mainCircleContainer: {
    alignItems: 'flex-start',
    right: 250,
    top: 90,
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
  icons: {
    flex: 1,
    marginHorizontal: 14,
    flexDirection: 'row',
    gap:10,
    alignItems: 'center',
  },
});
