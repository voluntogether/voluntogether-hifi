import React from "react";
import { View, Text, Image, Button, Card} from "react-native-ui-lib";
import wording from '../../assets/wording';
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
import Styles from "../../Style.js";
import { abs } from "react-native-reanimated";


let pageWording = wording.matched.getMatched;
let GetMatched = ({ navigation, route }) => {
   const { name } = route.params;
   console.log(name)
    return (
        <View flex padding-page centerH>
            <Text heading center nonBlackBlack marginB-s4>{pageWording.header}</Text>
            <Text center body fadedSubtext marginB-s4>{(name == 'Emily' ? 'Congratulations! The voluntogether algorithm has paired you with Emily, your new volunteer partner.' : 'Congratulations! The voluntogether algorithm has paired you with Nathan, your new volunteer partner.')} </Text>

            <View centerV>
                <Card style={[Styles.blueCard, Styles.boxShadow]} centerH >
                    <Image style={{width: 280, height: 200, borderRadius: 10}} source={require('../../assets/images/Emily.png')}/>
                </Card>
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
