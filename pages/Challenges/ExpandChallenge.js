import React from "react";
import { Dimensions, ScrollView } from "react-native";
import { Button, Card, Image, Text, View } from "react-native-ui-lib";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import BackArrow from "../../components/BackArrow";
import Styles from "../../Style.js";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


let ExpandChallenge = ({ navigation, route}) => {
  return (
    <View padding-page style={[Styles.noHorizontalPadding]}>
        <BackArrow navigation={navigation} />
        <Text heading center nonBlackBlack marginB-s4>Explore Challenges</Text>
        <ScrollView>
            <View centerv style={[Styles.greyCardChallenge]}>
                <View centerH marginB-s4 style={[Styles.challenge]}>

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

                <View style={[Styles.width322, Styles.tagList]} marginB-s4>
                    <Text style={[Styles.nonButtonTag]} marginR-s2>
                        <Text smallBody nonBlackBlack>🐳 Animal Welfare</Text>
                    </Text>
                    <Text style={[Styles.nonButtonTag]}>
                        <Text smallBody nonBlackBlack>🌍 Environment</Text>
                    </Text>
                </View>

                <View style={[Styles.width322]} marginB-s2>
                    <Text body marginT-s2>Looking for service and serenity? Join this Beach Cleanup Challenge with SF Marine Wildlife to help make our planet and community more sustainable.</Text>
                </View>

                <View style={[Styles.alignRow]} marginB-s2>
                    <Card style={[Styles.challengeBlueCard, Styles.boxShadow]} left >
                        <Text bold nonWhiteWhite marginB-s2 bigBody>Challenge details</Text>
                        <View style={[Styles.alignRow]}>
                            <Text nonBlackBlack marginB-s1>Total Hours Required Per Person: 5</Text>
                        </View>

                        <View flexDirection="row">
                            <Text nonBlackBlack>Participants: 25</Text>
                        </View>
                    </Card>
                </View>

                <Button style={[Styles.greenButton, Styles.boxShadow]} label={'Join Challenge'} onPress={() => navigation.navigate('ChallengeJoined')} />

            </View>
        </View>
        </ScrollView>
    </View>
  );
}

export default ExpandChallenge;
