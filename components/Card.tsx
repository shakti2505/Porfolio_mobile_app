import {StyleSheet, Text, View, TouchableOpacity, Image, Linking} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Icons2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/FontAwesome';
import Icons3 from 'react-native-vector-icons/Ionicons';

type ProjectDetails = {
  name: string;
  description: string;
  image: string;
  githubUrl:string,
  liveUrl:string
};

const Card = (props: ProjectDetails) => {
  const {name, description, image, githubUrl, liveUrl} = props; 

  const openwebsite = (url:string) =>{
    Linking.openURL(url);
  }

  return (
    <View
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
            uri: image,
          }}
          style={styles.cardImage}
        />
        <View style={{paddingHorizontal: 10, paddingVertical: 10, gap: 10}}>
          <Text style={styles.cardHeading}>{name}</Text>
          <Text style={[styles.cardHeading, {fontSize: 17}]}>
            {description}
          </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.btn} onPress={()=>openwebsite(liveUrl)}>
            <Icons name="external-link-square" size={30} color="#fff"></Icons>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={()=>openwebsite(githubUrl)}>
            <Icons2 name="github" size={30} color="#fff" />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

export default Card;

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
