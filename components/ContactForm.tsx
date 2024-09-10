import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  ToastAndroid,
  Linking,
} from 'react-native';
import React, {useState} from 'react';
import Icons2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icons3 from 'react-native-vector-icons/Ionicons';
import {RootStackParamList} from '../App';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import RNFS from 'react-native-fs';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const showToast = (message: string, duration: number, position: number) => {
    ToastAndroid.showWithGravity(message, duration, position);
  };
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleCall = () => {
    const phoneNumber = 8109352757;
    const telUrl = `tel:${phoneNumber}`;

    Linking.openURL(telUrl).catch(err => {
      showToast('App not available', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    });
  };

  const openWebSite = (website: string) => {
    Linking.openURL(website);
  };

  const sendEmail = () => {
    const email = 'kashyapshakti1994@gmail.com';

    const subject = 'Please enter your subject';
    const body = '';
    const mailToUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    Linking.openURL(mailToUrl)
      .then(supported => {
        if (supported) {
          Linking.openURL(mailToUrl);
        } else {
          showToast(
            'Gmail App not available, opening in browser',
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
          );
          Linking.openURL('https://www.gmail.com/');
        }
      })
      .catch(error => {
        showToast(
          'Please try again later',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      });
  };

  const handleSubmit = () => {
    if (
      formData.email == '' ||
      formData.name === '' ||
      formData.message === ''
    ) {
      showToast(
        'Please provide all details!',
        ToastAndroid.SHORT,
        ToastAndroid.TOP,
      );
      return;
    }
    setIsLoading(true);
    const scriptURL =
      'https://script.google.com/macros/s/AKfycbz__tAmeGf-FIgP_4be_IRr4rZolnRu7lWDEz-dHB3aLnAeW6DHu9LOm8rLhHzYAkWA/exec';
    const form = new FormData();
    form.append('Name', formData.name);
    form.append('email', formData.email);
    form.append('Message', formData.message);

    fetch(scriptURL, {method: 'POST', body: form})
      .then(response => response.json())
      .then(result => {
        if (result.row != undefined) {
          setIsLoading(false);
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          showToast(
            'Message received, I will contact you soon >😊!',
            ToastAndroid.LONG,
            ToastAndroid.CENTER,
          );
        }
      })
      .catch(error => {
        setIsLoading(false);
        showToast('Please try again', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
        console.error('Error:', error);
      });
  };

  const handleChange = (field: string, value: string) => {
    console.log(field, value);
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const downloadFile = async () => {
    const fileURL =
      'https://drive.google.com/file/d/1LLD9QWDZuCfhEwRJ-YDhbP_Vsri7H5Sc/view?usp=drive_link';
    try {
      const downloadFIle = RNFS.downloadFile({
        fromUrl: fileURL,
        toFile: `${RNFS.DocumentDirectoryPath}/ResumefromApp.pdf`,
        headers: {
          'Content-Type': 'application/pdf',
        },
      });
      console.log(RNFS.DocumentDirectoryPath);
      const result = await downloadFIle.promise;
      if (result.statusCode === 200) {
        console.log();
        showToast('resume saved', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      } else {
        showToast('try again', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      }
    } catch (error) {
      showToast('try again', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    }
  };

  return (
    <SafeAreaView style={styles.formContainer}>
      <ScrollView>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icons3
              name="chevron-back-circle-sharp"
              size={50}
              color="#F18505"
            />
          </TouchableOpacity>
          <Text style={styles.headingText}>Contact Me</Text>
        </View>
        <View>
          <TextInput
            editable={isLoading ? false : true}
            onChangeText={text => handleChange('name', text)}
            placeholder="Your name"
            value={formData.name}
            style={styles.input}></TextInput>
          <TextInput
            inputMode="email"
            editable={isLoading ? false : true}
            onChangeText={email => handleChange('email', email)}
            placeholder="Your email"
            keyboardType="email-address"
            value={formData.email}
            style={styles.input}></TextInput>
          <TextInput
            editable={isLoading ? false : true}
            value={formData.message}
            onChangeText={message => handleChange('message', message)}
            multiline
            numberOfLines={5}
            maxLength={150}
            placeholder="Your Message"
            style={styles.input}></TextInput>
        </View>
        <TouchableOpacity
          activeOpacity={25}
          onPress={handleSubmit}
          style={styles.btn}
          disabled={isLoading ? true : false}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#FFFFFF" />
          ) : (
            <Text
              style={{
                fontSize: 27,
                fontWeight: 'bold',
                color: '#fff',
              }}>
              Submit
            </Text>
          )}
        </TouchableOpacity>
        <View style={styles.seperatorContainer}>
          <View style={styles.seperator}></View>
          <Text>OR</Text>
          <View style={styles.seperator}></View>
        </View>
        <TouchableOpacity
          style={styles.iconsButtons}
          onPress={() => sendEmail()}>
          <Icons2 name="gmail" size={50} color="#F18505" />
          <Text style={styles.iconText}>kashyapshakti1994@gmail.com</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconsButtons}
          onPress={() => handleCall()}>
          <Icons2 name="phone" size={50} color="#F18505" />
          <Text style={styles.iconText}>+918109352757</Text>
        </TouchableOpacity>
        <View style={styles.iconsButtons}>
          <TouchableOpacity
            onPress={() => openWebSite('https://github.com/shakti2505/')}>
            <Icons2 name="github" size={50} color="#F18505" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebSite(
                'https://www.linkedin.com/in/shakti-kashyap-3a4271222/',
              )
            }>
            <Icons2 name="linkedin" size={50} color="#F18505" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              openWebSite('https://wa.me/+918109352757?text=Hi there!')
            }>
            <Icons2 name="whatsapp" size={50} color="#F18505" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={25}
          onPress={() =>
            openWebSite(
              'https://drive.google.com/file/d/1LLD9QWDZuCfhEwRJ-YDhbP_Vsri7H5Sc/view?usp=drive_link',
            )
          }
          style={[
            styles.btn,
            {
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              gap: 10,
              marginVertical: 25,
            },
          ]}
          disabled={isLoading ? true : false}>
          <Icons name="cloud-download" size={40} color="#000"></Icons>

          <Text
            style={{
              fontSize: 27,
              fontWeight: 'bold',
              color: '#000',
            }}>
            Resume
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactForm;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
  },
  iconsButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
  },
  iconText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  btn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    borderRadius: 8,
    backgroundColor: '#F18505',
    padding: 4,
  },
  headingText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 16,
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#F18505',
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 15,
    fontSize: 25,
  },
  icons: {
    width: 70,
    height: 70,
  },
  seperator: {
    flex: 1,
    height: 0.5,
    backgroundColor: '#fff',
    marginHorizontal: 12,
  },
  seperatorContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
