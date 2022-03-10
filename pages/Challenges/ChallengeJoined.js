import React from "react";
import { Dimensions, ImageBackground, Pressable, ScrollView } from "react-native";
import Svg, { Circle, Path, Rect } from 'react-native-svg';
import { Card, Text, View } from "react-native-ui-lib";
import Styles from "../../Style.js";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let ChallengeJoined = ({ navigation, route}) => {
  return (
    <ScrollView>
    <View flex >
      <View>
        <ImageBackground style={{ width: windowWidth, height: 300, justifyContent: "center" }} source={"a" == 'a' ? require("../../assets/images/ocean-cleanup.jpg") : require("../../assets/images/tree-planting.jpg")} >
          <Text center megaHeading bold color="#F7FDF8">Beach Cleanup</Text>
        </ImageBackground>
      </View>

      <View right marginR-s4>
        <Pressable centerH onPress={() => navigation.navigate('ViewChallenge')}>
          <Text marginT-s2>Leave challenge</Text>
        </Pressable>
      </View>


      <Card style={[Styles.challengeBlankCard]} marginL-s8 >
        <Text bold nonBlackBlack marginB-s2 body>Started February 2022</Text>
          <Text bold nonBlackBlack marginB-s2 bigBody>Progress: 5 / 20 hours </Text>
          <Svg width="288" height="14" viewBox="0 0 288 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect width="288" height="14" rx="7" fill="#C4C4C4"/>
            <Rect width="85" height="14" rx="7" fill="url(#paint0_linear_185_3550)"/>
            {/* <defs>
              <linearGradient id="paint0_linear_185_3550" x1="-3.5623e-07" y1="7.00004" x2="99.3049" y2="7.00004" gradientUnits="userSpaceOnUse">
              <stop stop-color="#9DB865"/>
              <stop offset="1" stop-color="#A4E3A7"/>
              </linearGradient>
            </defs> */}
          </Svg>
          <Text marginT-s2 nonBlackBlack left>The voluntogether community collectively volunteered 5 hours on this challenge.</Text>
      </Card>
      

      <View marginL-s8> 
      <Card style={[Styles.challengeGraphicCard, Styles.boxShadow]} centerH marginR-s8 marginB-s8>
              <Svg width="300" height="400" viewBox="0 95 378 455" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Circle cx="194.461" cy="164.461" r="50.4614" fill="#F6CA44" />
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M180.176 204.384C211.255 204.384 236.45 179.19 236.45 148.11C236.45 143.991 236.007 139.974 235.167 136.106C241.296 144.361 244.923 154.586 244.923 165.658C244.923 193.061 222.708 215.276 195.305 215.276C181.603 215.276 169.199 209.722 160.22 200.743C166.422 203.096 173.148 204.384 180.176 204.384Z" fill="#FAE269" />
              </Svg>
      </Card>


        <Card style={[Styles.challengeDescriptionCard]} centerH>
          <View justifyContent="space-between" marginB-s4>
            <Text nonBlackBlack bigBody>Challenge Details</Text>
            <Text nonBlackBlack body>Looking for service and serenity? Join this Beach Cleanup challenge with SF Marine Wildlife to help make our planet and community more sustainable.</Text>
          </View>

            <View style={[Styles.alignRow]}> 
              <Text bold nonBlackBlack marginB-s2>Total Hours Required</Text>
              <Text bold fadedSubtext>5</Text>
            </View>

            <View style={[Styles.alignRow]}>  
                <Text bold nonBlackBlack>Participants</Text>
                <Text bold fadedSubtext>25</Text>
            </View>
        </Card>

        
      </View>
      
      


    </View>
    </ScrollView>
  );
}

export default ChallengeJoined;
