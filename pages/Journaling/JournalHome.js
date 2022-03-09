import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, Card } from "react-native-ui-lib";
import { useSelector, useDispatch } from "react-redux";
import wording from '../../assets/wording';
import Styles from "../../Style.js";
import { StyleSheet, Pressable } from "react-native";
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import _ from "underscore";
import { resetJournals } from "../../state/journalingSlice";

let JournalHome = ({ navigation }) => {

  let dispatch = useDispatch();
  let [journals, setJournals] = useState([])
  let stateJournals = useSelector(state => state.journaling.journals)
  let userName = useSelector(state => state.user.name)


  useEffect(() => {
    setJournals(stateJournals);
  }, [stateJournals])

  return (
    <View flex padding-page >
      <View marginB-70 />
      <Text heading center nonBlackBlack marginB-s4>Experiences</Text>
      <Text center body fadedSubtext marginB-s8>
        Journal together with your volunteer partner(s) online by uploading responses to prompts.
      </Text>

      <View style={StylesJournal.journalcontainer}>
        {
          _.map(_.chunk(journals, 2), (journalPair) => {

            return (
              <>
                <View style={StylesJournal.rowContainer}>
                  {
                    _.map(journalPair, (journal) => {
                      // more code here
                      return (
                        <Pressable onPress={() => navigation.navigate('ViewThreads', { id: journal.id })}>
                          <Card style={[StylesJournal.blueCardJournal, Styles.boxShadow]} centerH >
                            <Text>{new Date(journal.date).toLocaleDateString("en-US")}</Text>
                            <Text>{userName} and Emily</Text>

                            {/* insert image here */}
                          </Card>
                        </Pressable>
                      )
                    })
                  }
                </View>
              </>
            )

          })



        }
      </View>
      <Button bold buttonArrow nonBlackBlack style={[Styles.yellowButton]} label={"➔"} onPress={() => dispatch(resetJournals())} />
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
