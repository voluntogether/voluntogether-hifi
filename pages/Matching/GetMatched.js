import React from "react";
import { View, Text, Image, Button } from "react-native-ui-lib";
import wording from '../../assets/wording';
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
import Styles from "../../Style.js";


let pageWording = wording.matched.getMatched;
let GetMatched = ({ navigation, route }) => {
   const { name } = route.params;
   console.log(name)
    return (
        <View flex padding-page>
            <Text heading center nonBlackBlack marginB-s4>{pageWording.header}</Text>
            <Text center body fadedSubtext marginB-s4 marginT-s6>{(name == 'Emily' ? 'Congratulations! The voluntogether algorithm has paired you with Emily, your new volunteer partner.' : 'Congratulations! The voluntogether algorithm has paired you with Nathan, your new volunteer partner.')} </Text>

            <View >
                <Svg width="296" height="212" viewBox="0 0 296 212" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <G filter="url(#filter0_d_192_7629)">
                    <Rect x="4" width="288" height="204" rx="20" fill="url(#pattern0)" shape-rendering="crispEdges"/>
                    </G>
                </Svg>
            </View>
            {/* {(name == 'Emily' ? <Image source={require('/assets/images/emily.svg')}/> : <Image source={require('/assets/images/nathan.svg')}/>)} */}
            <Button style={[Styles.greenButton, Styles.boxShadow]} marginB-s4 label={pageWording.buttonAccept} onPress={() => navigation.navigate('OrganizationMatch', {
                name: 'Emily',
                organization: 'Ecumenical Hunger Program'
            })} />
            {(name == 'Emily' ? <Button style={[Styles.greenButton, Styles.boxShadow]} marginB-s4 label={pageWording.buttonReject} onPress={() => navigation.navigate('MatchingAlgorithm', {
                rematch: true
            })} />
            : <Button style={[Styles.greenButton, Styles.boxShadow]} marginB-s4 label={pageWording.buttonReject} onPress={() => navigation.navigate('ReconsiderMatching'
            )} />)}

        </View>
    );
}

export default GetMatched
