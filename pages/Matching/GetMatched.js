import React from "react";
import { View, Text, Image, Button, Card} from "react-native-ui-lib";
import wording from '../../assets/wording';
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
import Styles from "../../Style.js";
import { abs } from "react-native-reanimated";
import BackArrow from "../../components/BackArrow";


let pageWording = wording.matched.getMatched;
let GetMatched = ({ navigation, route }) => {
   const { name } = route.params;
    return (
        <View flex padding-page>
            <BackArrow navigation={navigation} />
            <Text heading center nonBlackBlack marginB-s4>{pageWording.header}</Text>
            <Text center body fadedSubtext marginB-s4>{(name == 'Emily' ? 'Congratulations! The voluntogether algorithm has paired you with Emily, your new volunteer partner. \n \n You and Emily both like food sustainability.' : 'Congratulations! The voluntogether algorithm has paired you with Nathan, your new volunteer partner. \n \n You and Nathan both like animal welfare.')} </Text>

            <View>
                <Card style={[Styles.blueCard, Styles.boxShadow]} centerH >
                    <Image style={{width: 280, height: 200, borderRadius: 10}} source={name == 'Emily' ? require("../../assets/images/Emily.png") : require("../../assets/images/Nathan.png")}/>
                </Card>
            </View>

            <Button style={[Styles.greenButton, Styles.boxShadow]} marginB-s4 label={pageWording.buttonAccept} onPress={() => navigation.navigate('OrganizationMatch', {
                name: name,
                organization: (name == 'Emily' ? 'Ecumenical Hunger Program' : 'Peninsula Humane Society')
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
