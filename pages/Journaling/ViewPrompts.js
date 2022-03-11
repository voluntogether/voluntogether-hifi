// import React from "react";
// import { View, Text, Image, Button, Card } from "react-native-ui-lib";
// import { useSelector, useDispatch } from "react-redux";
// import wording from '../../assets/wording';
import Styles from "../../Style.js";
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import React from 'react';
import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Text, View } from "react-native-ui-lib";
import { useSelector } from 'react-redux';
import BackArrow from '../../components/BackArrow';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Describe a hardship you faced during this experience.',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'How did you resolve conflict when volunteering',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'What is a personal challenge you overcame when volunteering?',
  },
];


const ViewPrompts = ({ navigation, route }) => {

  let { id } = route.params;
  const journal = useSelector(state => state.journaling.journals.find(j => j.id === id));

  const Item = ({ title }) => (
    <Pressable onPress={() => {
      navigation.navigate("CreateThread", {
        prompt: title,
        id
      })
    }}>
      <View style={stylesPrompts.item}>
        <Text style={stylesPrompts.title}>{title}</Text>
      </View>
    </Pressable>

  );

  const { category } = route.params;

  const renderItem = ({ item }) => (

    <Item title={item.title} />
  );

  return (
<View flex padding-page >
      <BackArrow navigation={navigation} />
      <View marginB-10/>

      <View>
        <Text heading center nonBlackBlack marginB-s10 marginT-s8>{category + ' Prompts'}</Text>
      </View>
      <View centerH>
      <View paddingT-s6 centerH style={stylesPrompts.backgroundCard}>
        <View style={{justifyContent: 'center',alignItems: 'center'}}>
          <Svg marginT-s8 style={{justifyContent: 'center',alignItems: 'center'}} width="101" height="108" viewBox="0 0 101 108" fill="none" xmlns="http://www.w3.org/2000/svg" style={[Styles.boxShadow]}>
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M58.1831 5.59232C66.3843 6.19851 74.9147 0.864172 82.4965 4.06377C90.0693 7.25958 95.1451 14.9888 98.4017 22.565C101.421 29.5897 101.521 37.6344 100.163 45.1633C98.9993 51.6099 91.526 55.822 91.2191 62.3663C90.8163 70.9581 100.453 78.5599 98.2077 86.8602C96.1805 94.355 87.4812 98.0232 80.6115 101.584C73.6469 105.194 65.8363 109.301 58.1831 107.606C50.442 105.893 47.2946 95.8565 40.0581 92.6058C32.5281 89.2234 22.9889 92.9461 15.9456 88.6333C8.48962 84.0678 1.03442 76.8368 0.0666526 68.1179C-0.921137 59.2186 9.3717 52.7732 10.9878 43.9672C12.6996 34.64 5.52455 24.4336 9.64951 15.9026C13.6711 7.58537 23.0797 2.25035 32.0838 0.337565C40.8748 -1.52996 49.222 4.92997 58.1831 5.59232Z" fill="#A4C1E3"/>
            <View style={{justifyContent: 'center',alignItems: 'center'}} marginT-s8>
              <FontAwesome5 name={'dumbbell'} size={40} color={"white"}/>
            </View>
          </Svg>
        </View>

        <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
      </View>
      </View>


    </View>
  );
}

const stylesPrompts = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#345f93',
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 16,
    borderBottomWidth: 0.4,
    borderBottomColor: "#FFFFFF"

  },
  title: {
    fontSize: 16,
    color: '#F7FDF8'
  },
  backgroundCard: {
    backgroundColor: '#345f93',
    borderRadius: 10,
    minHeight: 500,
    width: 330,
  }
});

export default ViewPrompts;
