import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, Card } from "react-native-ui-lib";
import { useSelector, useDispatch } from "react-redux";
import wording from '../../assets/wording';
import Styles from "../../Style.js";
import { StyleSheet, Pressable } from "react-native";
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

let JournalHome = ({ navigation }) => {

  let [journals, setJournals] = useState([])


  useEffect(() => {

  }, [])

  return (
    <View flex padding-page >
      <View marginB-70 />
      <Text heading center nonBlackBlack marginB-s4>Experiences</Text>
      <Text center body fadedSubtext marginB-s8>
        Journal together with your volunteer partner(s) online by uploading responses to prompts.
      </Text>

      <View style={StylesJournal.journalcontainer}>
        <View style={StylesJournal.rowContainer}>
          <Pressable onPress={() => navigation.navigate('ViewThreads', { organization: 'Peninsula Humane Society' })}>
            <Card style={[StylesJournal.blueCardJournal, Styles.boxShadow]} centerH >
              {/* insert image here */}
            </Card>
          </Pressable>
          <Card style={[StylesJournal.blueCardJournal, Styles.boxShadow]} centerH >
            {/* insert image here */}
          </Card>
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

export default JournalHome;
