import React from "react";
import { View, Text, Image, Button, Card } from "react-native-ui-lib";
import { useSelector, useDispatch } from "react-redux";
import wording from '../../assets/wording';
import Styles from "../../Style.js";
import { StyleSheet, Pressable } from "react-native";
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RotateInUpLeft } from "react-native-reanimated";

let ViewChallenges = ({ navigation, route}) => {
  return (
    <View flex padding-page >
      <View marginB-70 />
        <Text heading center nonBlackBlack marginB-s4> Explore Challenges </Text>
        {/* <Text center body fadedSubtext marginB-s8>
        Journal together with your volunteer partner(s) online by uploading responses to prompts.
        </Text> */}


            <View centerH marginB-s4>
                <Pressable centerH onPress={() => navigation.navigate('ExpandChallenge')}>
                    <Image centerH style={[Styles.challengeImage]} source={require("../../assets/images/ocean-cleanup.jpg")} />

                    <View >
                      <Text subHeading style={[Styles.challengeTitle]}>SF Beach Cleanup</Text>
                      { /* <Text body> # + person icon</Text> */ }
                      <FontAwesome5 name={'fa-solid fa-user-group'}
                      size={30}
                      color={"#000"} />
                    </View>
                    


                    <Text body>Looking for service and serenity? Join this Beach Cleanup Challenge with SF Marine Wildlife to help make our planet and community more sustainable.</Text>
                    { /* <Text buttonText>Tags</Text> */ }
                </Pressable>
            </View>

            <View centerH marginB-s4>
                <Pressable centerH onPress={() => navigation.navigate('ExpandChallenge')}>
                    <Image centerH style={[Styles.challengeImage]} source={require("../../assets/images/tree-planting.jpg")} />

                    <Text subHeading style={[Styles.challengeTitle]}>Tree Planting</Text>
                    { /* <Text body> # + person icon</Text> */ }
                    <Text body>Our ecosystems need our help. Come out for planting on your own or join a group with EcoTreeHealth. </Text>
                    { /* <Text buttonText>Tags</Text> */ }
                </Pressable>
            </View>



        {/* Need some way to query the state to check if there are any journals */}
    </View>
  );
}

export default ViewChallenges;
