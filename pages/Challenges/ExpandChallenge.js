import React from "react";
import { Dimensions, ScrollView, Alert } from "react-native";
import { Button, Card, Image, Text, View } from "react-native-ui-lib";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import BackArrow from "../../components/BackArrow";
import Styles from "../../Style.js";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


let ExpandChallenge = ({ navigation, route }) => {
    const { challenge } = route.params;



    return (
        <View padding-page style={[Styles.noHorizontalPadding]}>
            <View style={[Styles.backArrowContainerForPageWithoutPadding]}>
                <BackArrow navigation={navigation} />
            </View>
            <Text heading center nonBlackBlack marginB-s4>Explore Challenges</Text>
            <ScrollView>
                <View centerv style={[Styles.greyCardChallenge]}>
                    <View centerH marginB-s4 style={[Styles.challenge]}>

                        <View centerH>
                            {(challenge === 'SF Beach Cleanup' ? <Image centerH style={[Styles.challengeImage]} source={require("../../assets/images/ocean-cleanup.jpg")} />
                                : <Image centerH style={[Styles.challengeImage]} source={require("../../assets/images/tree-planting.jpg")} />)}
                        </View>

                        <View style={[Styles.width322, Styles.alignRow]}>
                            <Text subHeading style={[Styles.challengeTitle]}>{challenge}</Text>
                            <Text>
                                {(challenge === 'SF Beach Cleanup' ? <Text bold style={[Styles.participationCount]}>25</Text> : <Text bold style={[Styles.participationCount]}>12  </Text>)} {/* extra two spaces at the end of this is intentional */}
                                <FontAwesome5 name={'user-friends'} size={20} color={"#000"} />
                            </Text>
                        </View>



                        <View style={[Styles.width322, Styles.tagList]} marginB-s4>

                            {challenge === 'SF Beach Cleanup' ?
                                (
                                    <>
                                        <Text style={[Styles.nonButtonTag]} marginR-s2>
                                            <Text smallBody nonBlackBlack> 🐳 Animal Welfare</Text>
                                        </Text>
                                        <Text style={[Styles.nonButtonTag]}>
                                            <Text smallBody nonBlackBlack>🌍 Environment</Text>
                                        </Text>
                                    </>
                                ) :





                                (<Text style={[Styles.nonButtonTag]}>
                                    <Text smallBody nonBlackBlack>🌍 Environment</Text>
                                </Text>)

                            }


                        </View>

                        <View style={[Styles.width322]} marginB-s2>
                            {challenge === 'SF Beach Cleanup' ? <Text body marginT-s2>Looking for service and serenity? Join this Beach Cleanup Challenge with SF Marine Wildlife to help make our planet and community more sustainable.</Text> :
                                <Text body marginT-s2>Our ecosystems need our help. Come out for a session of tree planting on your own or join a group with EcoTreeHealth.</Text>}
                        </View>

                        <View style={[Styles.alignRow]} marginB-s2>
                            <Card style={[Styles.challengeBlueCard, Styles.boxShadow]} left >
                                <Text bold nonWhiteWhite marginB-s2 bigBody>Challenge details</Text>
                                <View style={[Styles.alignRow]}>
                                    {challenge === 'SF Beach Cleanup' ? <Text nonBlackBlack marginB-s1>Total Hours Required by Community: 20</Text> :
                                        <Text nonBlackBlack marginB-s1>Total Hours Required by Community: 10</Text>}
                                </View>

                                <View flexDirection="row">
                                    {challenge === 'SF Beach Cleanup' ? <Text nonBlackBlack>Participant Goal: 30</Text> :
                                        <Text nonBlackBlack>Participant Goal: 20</Text>}
                                </View>
                            </Card>
                        </View>

                        <Button style={[Styles.greenButton, Styles.boxShadow]} label={'Join Challenge'} onPress={() =>
                            navigation.navigate('ChallengeJoined', { challenge: challenge })
                        } />

                        <View marginB-s6 marginT-s6 height={20}>

                        </View>


                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default ExpandChallenge;
