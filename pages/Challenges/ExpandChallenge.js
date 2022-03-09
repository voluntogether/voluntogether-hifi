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
    <View padding-page style={[Styles.greyCardChallenge]}>
      <View marginB-70  />
        <Text heading center nonBlackBlack marginB-s4> Explore Challenges </Text>

        <View >
        {/* <View> */}
          <View centerH>
              <Card style={[Styles.blueCard, Styles.boxShadow]} centerH >
                  { /* TODO: add the actual variable to this to choose an image */ }
                  <Image style={{ width: 280, height: 200, borderRadius: 10 }} source={"a" == 'a' ? require("../../assets/images/ocean-cleanup.jpg") : require("../../assets/images/tree-planting.jpg")} />
              </Card>
          </View>

          <View alignRow> 
            <Text subHeading style={[Styles.challengeTitle]}>SF Beach Cleanup</Text>
              { /* <Text body> # + person icon</Text> */ }
            <FontAwesome5 name={'user-friends'} size={30} color={"#000"} />
          </View>
              
              <Text body>Looking for service and serenity? Join this Beach Cleanup Challenge with SF Marine Wildlife to help make our planet and community more sustainable.</Text>
              { /* <Text buttonText>Tags</Text> */ }

              <Card style={[Styles.blueCard, Styles.boxShadow]} centerH>
                  <Text>Challenge details</Text>
                  <Text>Total Hours Required 5</Text>
                  <Text>Participants 25</Text>
              </Card>

              <Button style={[Styles.regularYellowButton, Styles.boxShadow]} label={'Join Challenge'} onPress={() => navigation.navigate('ChallengeJoined')} />
          </View>
        {/* Need some way to query the state to check if there are any journals */}
    </View>
  );
}

export default ExpandChallenge;
