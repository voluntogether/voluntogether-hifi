// import React from "react";
// import { View, Text, Image, Button, Card } from "react-native-ui-lib";
// import { useSelector, useDispatch } from "react-redux";
// import wording from '../../assets/wording';
// import Styles from "../../Style.js";
// import { StyleSheet, Pressable, FlatList} from "react-native";
// import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, StatusBar, Pressable } from 'react-native';
import { View, Text, Image, Button, Card } from "react-native-ui-lib";
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
    <SafeAreaView style={stylesPrompts.container}>
      <View marginB-70 />
      <BackArrow navigation={navigation} />
      <Text heading center nonBlackBlack marginB-s4>{category + ' Prompts'}</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
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
  },
  title: {
    fontSize: 32,
    color: '#F7FDF8'
  },
});

export default ViewPrompts;
