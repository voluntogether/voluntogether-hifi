import React from "react";
import { Button, Card, Image, Text, View } from "react-native-ui-lib";
import { useDispatch } from "react-redux";
import wording from '../../assets/wording';
import BackArrow from "../../components/BackArrow";
import { addJournal } from "../../state/journalingSlice";
import { setMatch } from "../../state/userSlice";
import Styles from "../../Style.js";

let pageWording = wording.matched.getMatched;
let GetMatched = ({ navigation, route }) => {
    const { name } = route.params;

    let defaultJournal = {
        "date": Date.now(),
        "organization": "Palo Alto Nursing Home",
        "id": 4,
        "users": [1, 2],
        "prompts": [{
            "prompt": "How are you doing today?",
            "icon": "fa-smile-o",
            "responses": [
                {
                    "message": {
                        "user": 1,
                        "body": "I'm doing great!"
                    },
                    "replies": [
                        {
                            "message": {
                                "user": 1,
                                "body": "I'm doing great!"
                            }
                        },
                        {
                            "message": {
                                "user": 2,
                                "body": "I'm doing great!"
                            }
                        }
                    ]
                }
            ]

        }
        ]
    }


    const dispatch = useDispatch();
    return (
        <View flex padding-page>
            <BackArrow navigation={navigation} />
            <Text heading center nonBlackBlack marginB-s4>{pageWording.header}</Text>
            <Text center body fadedSubtext marginB-s4>
                Congratulations! The voluntogether algorithm has paired you with <Text bold>{name}</Text>, your new volunteer partner. {"\n\n"}
                You and {name} both like {name == "Emily" ? "food sustainability" : "animal welfare"}.
            </Text>

            <View centerH>
                <Card style={[Styles.blueCard, Styles.boxShadow]} centerH >
                    <Image style={{ width: 280, height: 200, borderRadius: 10 }} source={name == 'Emily' ? require("../../assets/images/Emily.png") : require("../../assets/images/Nathan.png")} />
                </Card>
            </View>

            <Button style={[Styles.greenButton, Styles.boxShadow]} marginB-s4 label={pageWording.buttonAccept} onPress={() => {
                navigation.navigate('OrganizationMatch', {
                    name: name,
                    organization: (name == 'Emily' ? 'Ecumenical Hunger Program' : 'Peninsula Humane Society')
                })
                dispatch(setMatch({
                    name: name,
                    organization: (name == 'Emily' ? 'Ecumenical Hunger Program' : 'Peninsula Humane Society')
                }))
                dispatch(addJournal(defaultJournal))


            }} />
            {(name == 'Emily' ? <Button style={[Styles.greenButton, Styles.boxShadow]} marginB-s4 label={pageWording.buttonReject} onPress={() => navigation.navigate('MatchingAlgorithm', {
                rematch: true
            })} />
                : <Button style={[Styles.greenButton, Styles.boxShadow]} marginB-s4 label={pageWording.buttonReject} onPress={() => navigation.navigate('ReconsiderMatching'
                )} />)}

        </View>
    );
}

export default GetMatched
