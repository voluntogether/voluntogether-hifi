import React from "react";
import { View, Text, Image, Button, Card } from "react-native-ui-lib";
import { useSelector, useDispatch } from "react-redux";
import wording from '../../assets/wording';
import { StyleSheet, Pressable, FlatList } from "react-native";
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RotateInUpLeft } from "react-native-reanimated";
import Styles from "../../Style.js";
import BackArrow from "../../components/BackArrow";


let ViewPromptCategories = ({ navigation, route }) => {


  let { id } = route.params;
  const journal = useSelector(state => state.journaling.journals.find(j => j.id === id));


  return (
    <View flex padding-page >
      <View marginB-70 />
      <BackArrow navigation={navigation} />

      <Text heading center nonBlackBlack marginB-s4> Pick a Category </Text>

      <View style={StylesJournal.journalcontainer}>
        <View style={StylesJournal.rowContainer}>
          <Pressable>
            <Card style={[StylesJournal.blueCardJournal, Styles.boxShadow]} centerH >
              {/* insert image here */}
            </Card>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('ViewPrompts',
            {
              category: 'Hardships',
              id: id
            })}>
            <Card style={[StylesJournal.blueCardJournal, Styles.boxShadow]} centerH >
              {/* insert image here */}
            </Card>
          </Pressable >
        </View>

        <View style={StylesJournal.rowContainer}>
          <Card style={[StylesJournal.blueCardJournal, Styles.boxShadow]} centerH >
            {/* insert image here */}
          </Card>
          <Card style={[StylesJournal.blueCardJournal, Styles.boxShadow]} centerH >
            {/* insert image here */}
          </Card>
        </View>
      </View>

    </View>
  );
}

const StylesJournal = StyleSheet.create({
  blueCardJournal: {
    backgroundColor: "#A4C1E3",
    height: 200,
    width: 150,
    paddingTop: 25,
    marginBottom: 60,
  },
  journalContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default ViewPromptCategories;
