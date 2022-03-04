import React from "react";
import { View, Text, Image, Button, Card } from "react-native-ui-lib";
import Styles from "../../Style.js";


let OrganizationMatch = ({ route, navigation }) => {
    const { name, organization } = route.params;
    return (
        <View flex padding-page centerH>
            <Text heading center nonBlackBlack marginB-s4>Congratulations!</Text>
            <Text center body fadedSubtext marginB-s4 marginT-s6>We assigned you and {JSON.stringify(name).slice(1, -1)} an organization to volunteer at: <Text bold>{JSON.stringify(organization).slice(1, -1)}</Text></Text>
            <Text center body italic fadedSubtext marginB-s4 marginT-s6>
                ​{(organization == 'Ecumenical Hunger Program' ? '​EHP’s mission is to provide compassionate, dignified and practical assistance to families and individuals experiencing economic and personal hardship. We offer material help support services, and advocacy for our neighbors in need, in a challenging and rapidly changing environment.'
                : 'The Peninsula Humane Society & SPCA is a local, private, non-profit charitable organization dedicated to animal welfare. PHS/SPCA is an open admission shelter, not only accepting many pet animals who might be refused at other shelters, but also taking care of injured and orphaned native wildlife.')}
            </Text>

            <View centerV>
                <Card style={[Styles.blueCard, Styles.boxShadow]} centerH >
                    <Image style={{width: 280, height: 200, borderRadius: 10}} source={require('../../assets/images/food.png')}/>
                </Card>

                <View center >
                    <Text style={[Styles.nonButtonTag]}>
                        <Text body nonBlackBlack>🥗 Food Sustainability</Text>
                    </Text>
                </View>
                {/* <Button fadedSubtext style={[Styles.nonButtonTag]} label={'🥗 Food Sustainability'}/> */}
            </View>
            {/* {(name == 'Ecumenical Hunger Program' ? <Image source={require('/assets/images/food.svg')}/> : <Image source={require('/assets/images/dog.svg')}/>)} */}

            <Button style={[Styles.greenButton, Styles.boxShadow]} label={'Coordinate volunteering'} onPress={() => navigation.navigate('MatchingChat', {
                name: name,
                organization: organization
            })}/>
        </View>
    );
}
export default OrganizationMatch;
