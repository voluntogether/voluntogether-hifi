import React from "react";
import { Dimensions, ImageBackground, Pressable, ScrollView, Alert } from "react-native";
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { Card, Text, View, Button } from "react-native-ui-lib";
import Styles from "../../Style.js";
import BackArrowLight from "../../components/BackArrowLight";




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let ChallengeJoined = ({ navigation, route }) => {
  const { challenge } = route.params;

  const leaveChallengeAlert = () =>
    Alert.alert(
      "Warning:",
      'Are you sure you want to quit ' + challenge + '?',
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Quit Challenge", onPress: () => navigation.navigate('ViewChallenges') }
      ]
    );
  return (
    <ScrollView>
      <View flex >
        <View>
          {challenge === 'SF Beach Cleanup' ?
            (

              <ImageBackground style={{ width: windowWidth, height: 300 }} source={require("../../assets/images/ocean-cleanup.jpg")} >
                <View padding-page>
                  <BackArrowLight navigation={navigation} />
                </View>
                <View centerH marginT-s10>
                  <View style={[Styles.transparentWhiteBackground, Styles.roundedEdges]}>
                    <Text megaHeading nonBlackBlack style={{ padding: 10 }}>Beach Cleanup</Text>
                  </View>
                </View>
              </ImageBackground>
            ) :
            (
              <ImageBackground style={{ width: windowWidth, height: 300 }} source={require("../../assets/images/tree-planting.jpg")} >
                <View padding-page>
                  <BackArrowLight navigation={navigation} />
                </View>
                <View centerH marginT-s10>
                  <View style={[Styles.transparentWhiteBackground, Styles.roundedEdges]}>
                    <Text megaHeading nonBlackBlack style={{ padding: 10 }}>Tree Planting</Text>
                  </View>
                </View>
              </ImageBackground>

            )

          }
        </View>

        <View centerH>

          <Card style={[Styles.challengeBlankCard]} >
            <Text bold nonBlackBlack marginB-s2 body>Started February 2022</Text>

            {challenge === 'SF Beach Cleanup' ? <Text bold nonBlackBlack marginB-s2 bigBody>Progress: 5 / 20 hours </Text> :
              <Text bold nonBlackBlack marginB-s2 bigBody>Progress: 2 / 10 hours </Text>}


            <Svg width="288" height="14" viewBox="0 0 288 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Rect width="288" height="14" rx="7" fill="#C4C4C4" />
              <Rect width="85" height="14" rx="7" fill="#9EBC6C" />
              {/* <defs>
              <linearGradient id="paint0_linear_185_3550" x1="-3.5623e-07" y1="7.00004" x2="99.3049" y2="7.00004" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9DB865"/>
              <stop offset="1" stop-color="#A4E3A7"/>
              </linearGradient>
            </defs> */}
            </Svg>

            {challenge === 'SF Beach Cleanup' ? <Text marginT-s2 nonBlackBlack left>The voluntogether community collectively volunteered 5 hours on this challenge.</Text> :
              <Text marginT-s2 nonBlackBlack left>The voluntogether community collectively volunteered 2 hours on this challenge.</Text>}
          </Card>



          <Card style={[Styles.challengeDescriptionCard]} centerH>
            <View justifyContent="space-between" marginB-s4>
              <Text nonBlackBlack bigBody>Challenge Details</Text>
              {challenge === 'SF Beach Cleanup' ? <Text nonBlackBlack body>Looking for service and serenity? Join this Beach Cleanup challenge with SF Marine Wildlife to help make our planet and community more sustainable.</Text> : <Text nonBlackBlack body>Our ecosystems need our help. Come out for a session of tree planting on your own or join a group with EcoTreeHealth.</Text>}
            </View>

            <View style={[Styles.alignRow]}>
              <Text bold nonBlackBlack marginB-s2>Total Hours Required</Text>
              {challenge === 'SF Beach Cleanup' ? <Text bold fadedSubtext>20</Text> :
                <Text bold fadedSubtext>10</Text>}
            </View>

            <View style={[Styles.alignRow]}>
              <Text bold nonBlackBlack>Participants</Text>
              {challenge === 'SF Beach Cleanup' ? <Text bold fadedSubtext>25</Text> :
                <Text bold fadedSubtext>12</Text>}
            </View>
          </Card>

          <Pressable centerH onPress={() => {
            leaveChallengeAlert();
          }
          }>
            <Button style={[Styles.greenButton, Styles.boxShadow]} label={'Quit Challenge'} />
          </Pressable>



        </View>


        <View marginB-s6 marginT-s6>

        </View>



      </View>
    </ScrollView>
  );
}

export default ChallengeJoined;
