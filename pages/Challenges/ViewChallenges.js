import React from "react";
import { View, Text, Image, Button, Card } from "react-native-ui-lib";
import { useSelector, useDispatch } from "react-redux";
import Styles from "../../Style.js";
import { StyleSheet, Pressable, ScrollView} from "react-native";
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RotateInUpLeft } from "react-native-reanimated";
import BackArrow from "../../components/BackArrow";

let ViewChallenges = ({ navigation, route}) => {
  return (
    <ScrollView>
    <View flex padding-page >
        <BackArrow navigation={navigation} />

      <View centerH />
        <Text heading center nonBlackBlack marginB-s4>Explore Challenges</Text>

        <View centerH marginB-s4 style={[Styles.challenge]}>
            <Pressable centerH onPress={() => navigation.navigate('ExpandChallenge')}>
                <View centerH>
                    <Image centerH style={[Styles.challengeImage]} source={require("../../assets/images/ocean-cleanup.jpg")} />
                </View>

                <View style={[Styles.width322, Styles.alignRow]}>
                  <Text subHeading style={[Styles.challengeTitle]}>SF Beach Cleanup</Text>
                  <Text>
                      <Text bold style={[Styles.participationCount]}>25  </Text> {/* extra two spaces at the end of this is intentional */}
                      <FontAwesome5 name={'user-friends'} size={20} color={"#000"} />
                  </Text>
                </View>

                <View style={[Styles.tagList]} marginB-s4>
                    <Text style={[Styles.nonButtonTag]} marginR-s2>
                        <Text smallBody nonBlackBlack>🐳 Animal Welfare</Text>
                    </Text>
                    <Text style={[Styles.nonButtonTag]}>
                        <Text smallBody nonBlackBlack>🌍 Environment</Text>
                    </Text>
                </View>

                <Text body marginT-s2>Looking for service and serenity? Join this Beach Cleanup Challenge with SF Marine Wildlife to help make our planet and community more sustainable.</Text>
            </Pressable>
        </View>

        <View style={[Styles.spacer]}></View>

        <View centerH marginB-s4 style={[Styles.challenge]}>
            <Pressable centerH onPress={() => navigation.navigate('ExpandChallenge')}>
                <View centerH>
                    <Image centerH style={[Styles.challengeImage]} source={require("../../assets/images/tree-planting.jpg")} />
                </View>


                    <View style={[Styles.width322, Styles.alignRow]}>
                        <Text subHeading style={[Styles.challengeTitle]}>Tree Planting</Text>
                        <Text>
                            <Text bold style={[Styles.participationCount]}>12  </Text> {/* extra two spaces at the end of this is intentional */}
                            <FontAwesome5 name={'user-friends'} size={20} color={"#000"} />
                        </Text>
                    </View>

                    <View style={[Styles.tagList]} marginB-s4>
                        <Text style={[Styles.nonButtonTag]}>
                            <Text smallBody nonBlackBlack>🌍 Environment</Text>
                        </Text>
                    </View>


                    <Text body marginT-s2>Our ecosystems need our help. Come out for a session of tree planting on your own or join a group with EcoTreeHealth.</Text>
            </Pressable>
        </View>



        {/* Need some way to query the state to check if there are any journals */}
    </View>
    </ScrollView>
  );
}

export default ViewChallenges;
