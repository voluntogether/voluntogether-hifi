import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Button, Card, Text, View } from "react-native-ui-lib";
import { useDispatch, useSelector } from "react-redux";
import _ from "underscore";
import MiniProfilePic from "../../components/MiniProfilePic";
import { resetJournals } from "../../state/journalingSlice";
import Styles from "../../Style.js";
import Svg, { Circle, Path, Rect } from 'react-native-svg';


let JournalHome = ({ navigation }) => {

  let dispatch = useDispatch();
  let [journals, setJournals] = useState([])
  let stateJournals = useSelector(state => state.journaling.journals)
  let userName = useSelector(state => state.user.name)
  let users = useSelector(state => state.user.users)
  let niceHex = ["#C1E3A4", "#C3EAE7", "#6D9AD0", "#CACAE5"]
  useEffect(() => {
    setJournals(stateJournals);
  }, [stateJournals])

  return (
    <View flex padding-page >
      <View marginB-70 />
      <Text heading center nonBlackBlack marginB-s4>Experiences</Text>
      <Text center body fadedSubtext marginB-s8>Journal together with your volunteer partner(s) online by uploading responses to prompts.</Text>

      <View style={StylesJournal.journalcontainer}>
        {
          _.map(_.chunk(journals, 2), (journalPair, i) => {

            return (
              <>
                <View style={StylesJournal.rowContainer}>
                  {
                    _.map(journalPair, (journal, j) => {
                      // more code here
                      return (
                        <Pressable onPress={() => navigation.navigate('ViewThreads', { id: journal.id })}>
                          <Card style={[StylesJournal.blueCardJournal, Styles.boxShadow]} centerH >


                            <View >
                              <Svg width="85" height="130" viewBox="0 0 85 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Rect x="5.119" y="0.397752" width="78.5211" height="100.05" rx="3.57977" fill={niceHex[i * 2 + j]} stroke="#A6A6A6" stroke-width="0.795504" />
                                <Rect x="3.97579" y="2.29983" width="78.9189" height="100.448" rx="3.77864" fill="#F5F5F5" stroke="#A6A6A6" stroke-width="0.397752" />
                                <Rect x="3.03158" y="3.35024" width="78.9189" height="100.448" rx="3.77864" fill="#F5F5F5" stroke="#A6A6A6" stroke-width="0.397752" />
                                <Rect x="2.0873" y="3.35024" width="78.9189" height="100.448" rx="3.77864" fill="#F5F5F5" stroke="#A6A6A6" stroke-width="0.397752" />
                                <Rect x="1.14309" y="4.40078" width="78.9189" height="100.448" rx="3.77864" fill="#F5F5F5" stroke="#A6A6A6" stroke-width="0.397752" />
                                <Rect x="0.397752" y="4.59966" width="78.5211" height="100.05" rx="3.57977" fill={niceHex[i * 2 + j]} stroke="#A6A6A6" stroke-width="0.795504" />
                                <Path d="M10.4056 104.564C10.5065 104.227 10.8162 103.997 11.1676 103.997H13.9765C14.5274 103.997 14.9114 104.543 14.725 105.062C14.4085 105.942 14.1475 106.668 13.8074 107.614C13.6838 107.958 13.3421 108.173 12.9788 108.136L10.4009 107.875C9.90377 107.825 9.57553 107.334 9.71895 106.856L10.4056 104.564Z" fill="#A6A6A6" />

                                <View alignSelf="center" style={[Styles.alignRow]} >
                                  {_.map(journal.users, (userID) => {
                                    return (<MiniProfilePic id={userID} style={[StylesJournal.miniProfilePic]} />)
                                  })}
                                </View>
                                

                              </Svg>
                              <Text center >{new Date(journal.date).toLocaleDateString("en-US")}</Text>


                            </View>

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
  },
  miniProfilePic: {
    maxHeight: 10,
    maxWidth: 10
  }
});

export default JournalHome;
