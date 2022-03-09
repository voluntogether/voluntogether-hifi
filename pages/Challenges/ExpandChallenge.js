import React from "react";
import { View, Text, Image, Button, Card } from "react-native-ui-lib";
import { useSelector, useDispatch } from "react-redux";
import Styles from "../../Style.js";
import { StyleSheet, Pressable, Dimensions } from "react-native";
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RotateInUpLeft } from "react-native-reanimated";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


let ExpandChallenge = ({ navigation, route}) => {
  return (
    <View padding-page >
      <View marginB-70  />
        <Text heading center nonBlackBlack marginB-s4> Explore Challenges </Text>

        <View centerv style={[Styles.greyCardChallenge]}>
        {/* <View> */}
          <View centerH>
              <Card style={[Styles.blueCard, Styles.boxShadow]} centerH >
                  { /* TODO: add the actual variable to this to choose an image */ }
                  <Image style={{ width: 280, height: 200, borderRadius: 10 }} source={"a" == 'a' ? require("../../assets/images/ocean-cleanup.jpg") : require("../../assets/images/tree-planting.jpg")} />
              </Card>
          </View>

          <View style={[Styles.alignRow]}> 
            <Text subHeading style={[Styles.challengeTitle]}>SF Beach Cleanup</Text>
              { /* <Text body> # + person icon</Text> */ }
            <FontAwesome5 name={'user-friends'} size={20} color={"#000"} />
          </View>

          <View style={[Styles.tagList]}>
            <Text style={[Styles.nonButtonTag]} marginR-s4>
              <Text smallBody nonBlackBlack>🐳 Animal Welfare</Text>
            </Text>
            <Text style={[Styles.nonButtonTag]}>
              <Text smallBody nonBlackBlack>🌍 Environment</Text>
            </Text>
          </View>
        
          <View centerH>
            <Text fadedSubtext body>Looking for service and serenity? Join this Beach Cleanup Challenge with SF Marine Wildlife to help make our planet and community more sustainable.</Text>
              { /* <Text buttonText>Tags</Text> */ }

              {/* trouble adding space in between text elements in parent space */}
              {/* <View justifyContent="space-between"> */}
              <View style={[Styles.alignRow]}>
              <Card style={[Styles.challengeBlueCard, Styles.boxShadow]} left >
                  <Text bold nonWhiteWhite>Challenge details</Text>
                  <View flexDirection="row"> 
                    <Text nonBlackBlack>Total Hours Required</Text>
                    <Text nonBlackBlack>5</Text>
                  </View>

                  {/* <View> */}
                  <View flexDirection="row">  
                    <Text nonBlackBlack>Participants</Text>
                    <Text nonBlackBlack>25</Text>
                  </View>
              </Card>
              </View>      
                <Button style={[Styles.smallerYellowButton, Styles.boxShadow]} label={'Join Challenge'} onPress={() => navigation.navigate('ChallengeJoined')} />
              </View>
          </View>
          
        {/* Need some way to query the state to check if there are any journals */}
    </View>
  );
}

export default ExpandChallenge;
