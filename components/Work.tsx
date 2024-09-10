import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Icons3 from 'react-native-vector-icons/Ionicons';

// navigation
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import Card from './Card';

const Work = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={styles.formContainer}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons3 name="chevron-back-circle-sharp" size={50} color="#F18505" />
        </TouchableOpacity>
        <Text style={styles.headingText}>Work</Text>
      </View>
      <ScrollView style={styles.cardContainer}>
        <Card
          name="Socialbook- A social media web app."
          description="Connect with people from the world, share photos, do real time
                chat and video calls."
          image="https://res.cloudinary.com/dtbz1n84e/image/upload/v1724749234/socialbook_ss_vstbbz.png"
          liveUrl="https://socialbook-x3jq.onrender.com/"
          githubUrl="https://github.com/shakti2505/Socialbook"
        />

        <Card
          name="Scholerhub"
          description="Search world class tutor for tech related courses and book the
                class and get conformation on email."
          image="https://res.cloudinary.com/dtbz1n84e/image/upload/v1724749233/scholer_hub_page_njefej.png"
          liveUrl="https://scholerhub.onrender.com/"
          githubUrl="https://github.com/shakti2505/cityScope_assignment"
        />
        <Card
          name="Portfolio"
          description="Portfolio website showcasing my about qualification, experience,
                work and other details."
          image="https://res.cloudinary.com/dtbz1n84e/image/upload/v1725904225/Screenshot_2024-09-09_231942_wzdlta.png"
          liveUrl="https://shaktikashyap.netlify.app/"
          githubUrl="https://github.com/shakti2505/portfolio_shakti"
        />
        {/* <View
          style={{
            borderWidth: 2,
            padding: 0.5,
            borderColor: '#BE5869',
            borderRadius: 9,
            marginVertical: 10,
          }}>
          <LinearGradient colors={['#403A3E', '#BE5869']} style={styles.card}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/dtbz1n84e/image/upload/v1724749234/socialbook_ss_vstbbz.png',
              }}
              style={styles.cardImage}
            />
            <View style={{paddingHorizontal: 10, paddingVertical: 10, gap: 10}}>
              <Text style={styles.cardHeading}>
                Socialbook- A social media web app.
              </Text>
              <Text style={[styles.cardHeading, {fontSize: 17}]}>
                Connect with people from the world, share photos, do real time
                chat and video calls.
              </Text>
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn}>
                <Icons
                  name="external-link-square"
                  size={30}
                  color="#fff"></Icons>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Icons2 name="github" size={30} color="#fff" />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
        <View
          style={{
            borderWidth: 2,
            padding: 1,
            borderColor: '#4b1e8580',
            borderRadius: 10,
            marginVertical: 10,
          }}>
          <LinearGradient colors={['#4b1e85', '#4b1e8503']} style={styles.card}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/dtbz1n84e/image/upload/v1724749233/scholer_hub_page_njefej.png',
              }}
              style={styles.cardImage}
            />
            <View style={{paddingHorizontal: 10, paddingVertical: 10, gap: 10}}>
              <Text style={styles.cardHeading}>Scholerhub</Text>
              <Text style={[styles.cardHeading, {fontSize: 17}]}>
                Search world class tutor for tech related courses and book the
                class and get conformation on email.
              </Text>
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn}>
                <Icons
                  name="external-link-square"
                  size={30}
                  color="#fff"></Icons>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Icons2 name="github" size={30} color="#fff" />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>
        <View
          style={{
            borderWidth: 2,
            padding: 1,
            borderColor: '#4b1e8580',
            borderRadius: 10,
            marginVertical: 10,
          }}>
          <LinearGradient colors={['#4b1e85', '#4b1e8503']} style={styles.card}>
            <Image
              source={{
                uri: 'https://res.cloudinary.com/dtbz1n84e/image/upload/v1725904225/Screenshot_2024-09-09_231942_wzdlta.png',
              }}
              style={styles.cardImage}
            />
            <View style={{paddingHorizontal: 10, paddingVertical: 10, gap: 10}}>
              <Text style={styles.cardHeading}>Portfolio</Text>
              <Text style={[styles.cardHeading, {fontSize: 17}]}>
                Portfolio website showcasing my about qualification, experience,
                work and other details.
              </Text>
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity style={styles.btn}>
                <Icons
                  name="external-link-square"
                  size={30}
                  color="#fff"></Icons>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn}>
                <Icons2 name="github" size={30} color="#fff" />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Work;

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    flexGrow: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    gap: 10,
    marginBottom: 8,
    marginHorizontal: 4,
  },
  btnTxt: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
    padding: 5,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#000',
    padding: 10,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  headingText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  container: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
  },
  cardContainer: {
    flexDirection: 'column',
  },
  card: {
    borderRadius: 7,
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: 10,
    paddingHorizontal: 4,
  },
  cardHeading: {
    fontSize: 25,
    fontWeight: '600',
    color: '#fff',
  },
  cardImage: {
    marginVertical: 4,
    width: '100%',
    height: 180,
    marginBottom: 8,
    borderRadius: 6,
  },
});
