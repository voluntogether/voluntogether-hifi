import React from "react";
import Svg, { Circle, G, Path, Rect } from 'react-native-svg';
import { Button, Text, View } from "react-native-ui-lib";
import BackArrow from "../../components/BackArrow.js";
import Styles from "../../Style.js";

// import wording from 'assets/wording';
// let pageWording = wording.matched.getMatchedIntro;


let GetMatchedIntro = ({ navigation }) => {
    return (
        <View flex padding-page>
            <BackArrow navigation={navigation} />

            <Text heading center nonBlackBlack marginB-s4>Get Matched</Text>
            <Text center body fadedSubtext marginB-s4>To be matched with another volunteer, first create a profile so our algorithm can work its magic ✨ </Text>

            <View marginB-s8 marginT-s3 center style={[Styles.boxShadow]}>
                <Svg width="278" height="255" viewBox="0 0 278 255" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <G filter="url(#filter0_d_192_3072)">
                        <Rect x="4" width="270" height="247" rx="12" fill="#A4C1E3" />
                    </G>
                    <Circle cx="194.461" cy="164.461" r="50.4614" fill="#F6CA44" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M180.176 204.384C211.255 204.384 236.45 179.19 236.45 148.11C236.45 143.991 236.007 139.974 235.167 136.106C241.296 144.361 244.923 154.586 244.923 165.658C244.923 193.061 222.708 215.276 195.305 215.276C181.603 215.276 169.199 209.722 160.22 200.743C166.422 203.096 173.148 204.384 180.176 204.384Z" fill="#FAE269" />
                    <Circle cx="82.4614" cy="72.4614" r="50.4614" fill="#F6CA44" />
                </Svg>
            </View>

            <Button style={[Styles.greenButton, Styles.boxShadow]} label={'Complete profile'} onPress={() => navigation.navigate('ProfileVolunteerAreas')} />

        </View>
    );
}

export default GetMatchedIntro
