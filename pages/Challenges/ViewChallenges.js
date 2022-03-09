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
      <View marginB-70 center />
        <Text heading center nonBlackBlack marginB-s4>Explore Challenges</Text>

        <View centerH marginB-s4 style={[Styles.challenge]}>
            <Pressable centerH onPress={() => navigation.navigate('ExpandChallenge')}>
                <View centerH>
                    <Image centerH style={[Styles.challengeImage]} source={require("../../assets/images/tree-planting.jpg")} />
                </View>
                <View>
                <View style={[Styles.width322]}>
                    <Text subHeading style={[Styles.challengeTitle]}>Tree Planting</Text>
                          <FontAwesome5 name={'fa-solid fa-user-group'}
                          size={30}
                          color={"#000"} />
                    </View>
                    <View style={[Styles.tagList]}>
                        <Text style={[Styles.nonButtonTag]} marginR-s4>
                            <Text body nonBlackBlack>🐳 Animal Welfare</Text>
                        </Text>
                        <Text style={[Styles.nonButtonTag]}>
                            <Text body nonBlackBlack>🌍 Environment</Text>
                        </Text>
                    </View>

                    <View centerH>
                        <Text body>Our ecosystems need our help. Come out for planting on your own or join a group with EcoTreeHealth.</Text>
                    </View>
                </View>
            </Pressable>
        </View>

        <View centerH marginB-s4 style={[Styles.challenge]}>
            <Pressable centerH onPress={() => navigation.navigate('ExpandChallenge')}>
                <View centerH>
                    <Image centerH style={[Styles.challengeImage]} source={require("../../assets/images/ocean-cleanup.jpg")} />
                </View>
                <View>
                  <Text subHeading style={[Styles.challengeTitle]}>SF Beach Cleanup</Text>
                  <FontAwesome5 name={'fa-solid fa-user-group'}
                  size={30}
                  color={"#000"} />
                </View>
                <View style={[Styles.tagList]}>
                    <Text style={[Styles.nonButtonTag]} marginR-s4>
                        <Text body nonBlackBlack>🐳 Animal Welfare</Text>
                    </Text>
                    <Text style={[Styles.nonButtonTag]}>
                        <Text body nonBlackBlack>🌍 Environment</Text>
                    </Text>
                </View>


                <Text body>Looking for service and serenity? Join this Beach Cleanup Challenge with SF Marine Wildlife to help make our planet and community more sustainable.</Text>
            </Pressable>
        </View>

        {/* Need some way to query the state to check if there are any journals */}
    </View>
  );
}

export default ViewChallenges;