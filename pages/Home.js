import React from "react";
import { Pressable, ScrollView } from "react-native";
import Svg, { Circle, Path } from 'react-native-svg';
import { Button, Card, Incubator, Text, View } from "react-native-ui-lib";
import { useDispatch, useSelector } from 'react-redux';
import { resetJournals } from "../state/journalingSlice";
import { resetState, toggleOnboarding } from "../state/userSlice";
import Styles from "../Style.js";
import { timeOfDay } from "../util/util";

let TextField = Incubator.TextField;




let Home = ({ navigation }) => {

    let userName = useSelector(state => state.user.name);
    let dispatch = useDispatch();
    let hasMatched = useSelector(state => state.user.hasMatched);

    return (
        <ScrollView>

            <View flex padding-page>
                <View marginT-s10>
                    <Text megaHeading nonBlackBlack marginT-s4 marginB-s8>{timeOfDay()}, {userName}.</Text>
                </View>

                {/* "TODO: have this card display either the matching or the journaling, depending on whether the user has done matching" */}
                <View centerH>
                    <Pressable onPress={() => navigation.navigate(!hasMatched ? 'Matching' : 'Journaling')}>
                        <Card style={[Styles.resizeableBlueCard, Styles.boxShadow]} centerH >
                            <Text heading center nonWhiteWhite marginB-s4>{!hasMatched ? "match with someone" : "journal with your partner"}</Text>
                            <Svg width="278" height="255" viewBox="0 0 278 255" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Circle cx="194.461" cy="164.461" r="50.4614" fill="#F6CA44" />
                                <Path fill-rule="evenodd" clip-rule="evenodd" d="M180.176 204.384C211.255 204.384 236.45 179.19 236.45 148.11C236.45 143.991 236.007 139.974 235.167 136.106C241.296 144.361 244.923 154.586 244.923 165.658C244.923 193.061 222.708 215.276 195.305 215.276C181.603 215.276 169.199 209.722 160.22 200.743C166.422 203.096 173.148 204.384 180.176 204.384Z" fill="#FAE269" />
                                <Circle cx="82.4614" cy="72.4614" r="50.4614" fill="#F6CA44" />
                            </Svg>
                        </Card>
                    </Pressable>

                    <Pressable onPress={() => navigation.navigate('Challenges')}>
                        <Card style={[Styles.resizeableBlueCard, Styles.boxShadow]} centerH >
                            <Text heading center nonWhiteWhite marginB-s4>explore a new challenge</Text>
                            <Svg width="267" height="263" viewBox="0 0 267 263" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <Path fill-rule="evenodd" clip-rule="evenodd" d="M186.342 62.1932C200.726 77.8003 190.643 102.803 194.39 124.053C198.748 148.76 220.345 171.413 209.71 194.701C197.996 220.353 169.344 239.455 141.793 239.234C115.815 239.025 102.73 210.721 83.606 193.689C66.569 178.515 43.4612 168.888 37.6568 146.486C31.1279 121.287 34.8293 91.9391 51.9292 71.4288C68.6853 51.3308 96.3938 47.172 121.919 45.4182C145.196 43.8188 170.787 45.3164 186.342 62.1932Z" fill="#C1E3A4" />
                                <Path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M140.258 45.6114C165.152 49.4504 179.309 72.2564 195.491 91.5865C212.522 111.932 237.387 130.75 233.516 157.015C229.456 184.563 202.462 200.883 177.557 213.266C152.153 225.897 124.284 233.949 97.4835 224.651C66.3515 213.85 36.0341 193.357 27.9638 161.366C19.7356 128.749 35.1817 94.6032 58.5895 70.4739C79.4489 48.9715 110.671 41.0486 140.258 45.6114Z" fill="#A4E3C6" />
                                <Path fill-rule="evenodd" clip-rule="evenodd" d="M127.99 66.7154C147.526 70.3212 158.971 87.6397 171.259 103.228C183.393 118.62 196.838 133.652 196.192 153.231C195.356 178.533 190.483 208.94 167.423 219.455C144.541 229.888 121.712 208.596 99.1581 197.475C77.0795 186.588 49.7269 180.583 41.5521 157.388C32.5907 131.961 40.0022 101.96 58.6142 82.4364C75.8165 64.3915 103.457 62.1872 127.99 66.7154Z" fill="#A4E3A7" />
                            </Svg>

                        </Card>
                    </Pressable>
                </View>

                {/* "TODO: REMOVE THESE BEFORE DEPLOYMENT" */}
                <View flex right bottom>
                    <Button bold buttonArrow nonBlackBlack style={[Styles.yellowButton]} label={"O"} onPress={() => dispatch(resetState())} />
                </View>
                <View flex left bottom>
                    <Button bold buttonArrow nonBlackBlack style={[Styles.yellowButton]} label={"J"} onPress={() => dispatch(resetJournals())} />
                </View>
            </View>
        </ScrollView>

    );
};


export default Home
