import React, { luseState, useEffect } from "react";
import { View, Text, Button, Incubator, Card, Image } from "react-native-ui-lib";
// import { View, Text } from 'react-native-ui-lib';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux'
import { rename, toggleOnboarding } from "../state/userSlice";
import { Keyboard, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import DismissKeyboardView from '../components/DismissKeyboardView'
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
import Styles from "../Style.js";

let TextField = Incubator.TextField;




let Home = ({ navigation }) => {


    return (
        <View flex padding-page>
            <View marginT-s10>
                <Text megaHeading nonBlackBlack marginT-s4 marginB-s8>good morning.</Text>
            </View>
            <View centerH>
                <Button centerH style={[Styles.invisibleBackgroundButton]} onPress={() => navigation.navigate('Matching')}>
                    <Card style={[Styles.resizeableBlueCard, Styles.boxShadow]} centerH >
                        <Text heading center nonWhiteWhite marginB-s4>match with someone</Text>
                        <Svg width="278" height="255" viewBox="0 0 278 255" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <Circle cx="194.461" cy="164.461" r="50.4614" fill="#F6CA44" />
                            <Path fill-rule="evenodd" clip-rule="evenodd" d="M180.176 204.384C211.255 204.384 236.45 179.19 236.45 148.11C236.45 143.991 236.007 139.974 235.167 136.106C241.296 144.361 244.923 154.586 244.923 165.658C244.923 193.061 222.708 215.276 195.305 215.276C181.603 215.276 169.199 209.722 160.22 200.743C166.422 203.096 173.148 204.384 180.176 204.384Z" fill="#FAE269" />
                            <Circle cx="82.4614" cy="72.4614" r="50.4614" fill="#F6CA44" />
                        </Svg>
                    </Card>
                </Button>
            </View>


            <View centerH>
                <Button centerH style={[Styles.invisibleBackgroundButton]} onPress={() => navigation.navigate('Challenges')}>
                <Card style={[Styles.yellowCard, Styles.boxShadow]} paddingL-s8 paddingR-s8 >
                    <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                        <Text bigBody nonBlackBlack marginB-s4>Explore a new challenge</Text>
                        <Image marginL-s8 right style={{ width: 20, height: 20}} source={require("../assets/images/pencil.png")} />
                    </View>
                </Card>
                </Button>
            </View>

            <View centerH>
                <Card style={[Styles.blueCard, Styles.boxShadow]} paddingL-s8 paddingR-s8>
                    <Text bigBody nonBlackBlack marginB-s4>Journal Highlight</Text>
                </Card>
            </View>

        </View>
    );
};


export default Home
