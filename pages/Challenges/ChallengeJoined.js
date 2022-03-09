import React from "react";
import { View, Text, Image, Button, Card } from "react-native-ui-lib";
import { useSelector, useDispatch } from "react-redux";
import wording from '../../assets/wording';
import Styles from "../../Style.js";
import { StyleSheet, Pressable, Dimensions, TouchableOpacity} from "react-native";
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RotateInUpLeft } from "react-native-reanimated";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let ChallengeJoined = ({ navigation, route}) => {
  return (
    <View flex >
      <View>
        <Image style={{ width: windowWidth, height: 300, borderRadius: 0 }} source={"a" == 'a' ? require("../../assets/images/ocean-cleanup.jpg") : require("../../assets/images/tree-planting.jpg")} />
      </View>

      <View right marginR-s4> 
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewChallenge')} 
        >
            <Text>Leave challenge</Text>
        </TouchableOpacity>
      </View>


      <Card style={[Styles.challengeBlankCard, Styles.boxShadow]}  >
        <Text bold nonBlackBlack marginB-s2 body>Started February 2022</Text>
          <Text bold nonBlackBlack marginB-s2 bigBody>Progress: 5 / 20 hours </Text>
          <Text nonBlackBlack marginB-s1 left>The voluntogether community collectively volunteered 5 hours on this challenge.</Text>
      </Card>

      <View marginH-s5>
        <Text nonBlackBlack bigBody> Challenge Details</Text>
        <Text nonBlackBlack body>Looking for service and serenity? Join this Beach Cleanup challenge with SF Marine Wildlife to help make our planet and community more sustainable. 
        </Text>
      </View>

      <Card style={[Styles.challengeBlueCard, Styles.boxShadow]} left marginH-s5>
          <Text bold nonWhiteWhite marginB-s2 bigBody>Challenge details</Text>
          <View flexDirection="row"> 
            <Text nonBlackBlack marginB-s1 >Total Hours Required</Text>
            <Text nonBlackBlack >5</Text>
          </View>

          {/* <View> */}
          <View flexDirection="row">  
                    <Text nonBlackBlack>Participants</Text>
                    <Text nonBlackBlack>25</Text>
                  </View>
      </Card>
      
      


    </View>
  );
}

export default ChallengeJoined;
