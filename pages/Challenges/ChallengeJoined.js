import React from "react";
import { Dimensions, ImageBackground, Pressable, ScrollView } from "react-native";
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { Card, Text, View } from "react-native-ui-lib";
import Styles from "../../Style.js";
import BackArrow from "../../components/BackArrow";




const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let ChallengeJoined = ({ navigation, route}) => {
  const { challenge } = route.params;
  return (
    <ScrollView>
    <View flex >
      <View>
        { challenge === 'SF Beach Cleanup' ?
        (

          <ImageBackground  style={{ width: windowWidth, height: 300, justifyContent: "center" }} source={require("../../assets/images/ocean-cleanup.jpg")} >
            {/* <BackArrow  navigation={navigation} /> */}
            <Text center megaHeading bold color="#F7FDF8">Beach Cleanup</Text>
          </ImageBackground>
        ) :
        (
          <ImageBackground style={{ width: windowWidth, height: 300, justifyContent: "center" }} source={require("../../assets/images/tree-planting.jpg")} >
            <Text center megaHeading bold color="#F7FDF8">Tree Planting</Text>
          </ImageBackground>

        )

        }
      </View>

      <View centerH>

      <Card style={[Styles.challengeBlankCard]} >
        <Text bold nonBlackBlack marginB-s2 body>Started February 2022</Text>

        { challenge === 'SF Beach Cleanup' ? <Text bold nonBlackBlack marginB-s2 bigBody>Progress: 5 / 20 hours </Text> :
        <Text bold nonBlackBlack marginB-s2 bigBody>Progress: 8 / 10 hours </Text>}


          <Svg width="288" height="14" viewBox="0 0 288 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect width="288" height="14" rx="7" fill="#C4C4C4"/>
            <Rect width="85" height="14" rx="7" fill="#9EBC6C"/>
            {/* <defs>
              <linearGradient id="paint0_linear_185_3550" x1="-3.5623e-07" y1="7.00004" x2="99.3049" y2="7.00004" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9DB865"/>
              <stop offset="1" stop-color="#A4E3A7"/>
              </linearGradient>
            </defs> */}
          </Svg>

          { challenge === 'SF Beach Cleanup' ? <Text marginT-s2 nonBlackBlack left>The voluntogether community collectively volunteered 5 hours on this challenge.</Text> :
           <Text marginT-s2 nonBlackBlack left>The voluntogether community collectively volunteered 8 hours on this challenge.</Text>}
      </Card>



        <Card style={[Styles.challengeDescriptionCard]} centerH>
          <View justifyContent="space-between" marginB-s4>
            <Text nonBlackBlack bigBody>Challenge Details</Text>
            {challenge === 'SF Beach Cleanup' ? <Text nonBlackBlack body>Looking for service and serenity? Join this Beach Cleanup challenge with SF Marine Wildlife to help make our planet and community more sustainable.</Text> : <Text nonBlackBlack body>Our ecosystems need our help. Come out for a session of tree planting on your own or join a group with EcoTreeHealth.</Text>}
          </View>

            <View style={[Styles.alignRow]}>
              <Text bold nonBlackBlack marginB-s2>Total Hours Required</Text>
              { challenge === 'SF Beach Cleanup' ? <Text bold fadedSubtext>20</Text> :
              <Text bold fadedSubtext>10</Text> }
            </View>

            <View style={[Styles.alignRow]}>
                <Text bold nonBlackBlack>Participants</Text>
                { challenge === 'SF Beach Cleanup' ? <Text bold fadedSubtext>25</Text>:
                <Text bold fadedSubtext>12</Text>}
            </View>
        </Card>

          <Pressable centerH onPress={() => navigation.navigate('ViewChallenges')}>
            <Text>Quit challenge</Text>
          </Pressable>


      </View>




    </View>
    </ScrollView>
  );
}

export default ChallengeJoined;
