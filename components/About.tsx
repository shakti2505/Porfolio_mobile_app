import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
// navigation
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import Icons3 from 'react-native-vector-icons/Ionicons';

import React, {useState} from 'react';

const About = () => {
  const openWebSite = (website: string) => {
    Linking.openURL(website);
  };
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.aboutContainer}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons3
              name="chevron-back-circle-sharp"
              size={50}
              color="#F18505"
            />
          </TouchableOpacity>
          <Text style={styles.headingText}>About Me</Text>
        </View>
        <View style={styles.picContainer}>
          <Image
            source={{
              uri: 'https://res.cloudinary.com/dtbz1n84e/image/upload/v1724749128/portfolio_image_o2evme.jpg',
            }}
            style={styles.profiePic}
          />
          <Text style={styles.name}>Shakti Kashyap</Text>
        </View>
        <ScrollView>
          <View style={[styles.card, styles.cardElevated]}>
            <View style={styles.cardBody}>
              <Text style={styles.cardDescription}>
                🚀 Full Stack developer with 1+ year of experience in web and
                mobile apps. Skilled in HTML, CSS, JavaScript, React, Node.js,
                Express.js, and MongoDB.
              </Text>
              <Text style={styles.cardDescription}>
                💡 I create user-focused, impactful solutions and love tackling
                innovative projects. Always eager to learn and stay updated with
                the latest trends.
              </Text>
              <Text style={styles.cardDescription}>
                🌄 Outside of work, I enjoy hiking, gaming, and hitting the gym
                to stay balanced and inspired.
              </Text>
              <Text style={styles.cardDescription}>
                💼 Check out my{' '}
                <Text
                  onPress={() => {
                    openWebSite('https://shaktikashyap.netlify.app/');
                  }}
                  style={styles.cardDescriptionHyperlink}>
                  Portfolio
                </Text>{' '}
                or connect if you'd like to collaborate or chat!
              </Text>
            </View>
          </View>
        </ScrollView>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={() => navigation.navigate('ContactForm')}>
            <Text style={styles.socialLinks}>Contact Me </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;

const styles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginVertical: 25,
  },
  profiePic: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  picContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 50,
  },
  headingText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
  },
  logo: {
    width: 50,
    height: 50,
  },
  container: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
  },
  card: {
    borderRadius: 6,
    marginVertical: 12,
  },
  cardElevated: {
    backgroundColor: '#343E47',
    elevation: 3,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    paddingHorizontal: 12,
  },

  cardDescription: {
    color: '#fff',
    fontSize: 15,
    padding: 8,
    marginTop: 6,
    flexShrink: 1,
  },
  cardfooter: {
    color: '#000000',
    flex: 1,
    fontSize: 14,
    textAlign: 'right',
  },
  footerContainer: {
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  socialLinks: {
    fontSize: 25,
    fontWeight: '600',
    color: '#fff',
    backgroundColor: '#F18505',
    paddingHorizontal: 40,
    paddingVertical: 6,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.4,
    borderRadius: 50,
  },
  cardDescriptionHyperlink: {
    color: '#F18505',
    fontSize: 15,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    textDecorationLine: 'underline',
  },
});
