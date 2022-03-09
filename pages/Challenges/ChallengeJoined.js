import React from "react";
import { View, Text, Image, Button, Card } from "react-native-ui-lib";
import { useSelector, useDispatch } from "react-redux";
import Styles from "../../Style.js";
import { StyleSheet, Pressable, Dimensions, TouchableOpacity, ImageBackground} from "react-native";
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RotateInUpLeft } from "react-native-reanimated";
import BackArrow from "../../components/BackArrow";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

let ChallengeJoined = ({ navigation, route}) => {
  return (
    <View flex >
    <BackArrow navigation={navigation} />

      <View>
        <ImageBackground style={{ width: windowWidth, height: 300, borderRadius: 0 }} source={"a" == 'a' ? require("../../assets/images/ocean-cleanup.jpg") : require("../../assets/images/tree-planting.jpg")} >
          <Text>Beach Cleanup</Text>
        </ImageBackground>
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


      <View style={[Styles.alignRow]}>
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

        <Card style={[Styles.resizeableBlueCard, Styles.boxShadow]} centerH >
              <Svg width="278" height="255" viewBox="0 0 278 255" fill="none" xmlns="http://www.w3.org/2000/svg">
                <Circle cx="194.461" cy="164.461" r="50.4614" fill="#F6CA44" />
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M180.176 204.384C211.255 204.384 236.45 179.19 236.45 148.11C236.45 143.991 236.007 139.974 235.167 136.106C241.296 144.361 244.923 154.586 244.923 165.658C244.923 193.061 222.708 215.276 195.305 215.276C181.603 215.276 169.199 209.722 160.22 200.743C166.422 203.096 173.148 204.384 180.176 204.384Z" fill="#FAE269" />
                <Circle cx="82.4614" cy="72.4614" r="50.4614" fill="#F6CA44" />
                </Svg>
        </Card>
      </View>




    </View>
  );
}

export default ChallengeJoined;
