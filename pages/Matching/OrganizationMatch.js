import React from "react";
import { Button, Card, Image, Text, View } from "react-native-ui-lib";
import { useSelector } from "react-redux";
import BackArrow from "../../components/BackArrow.js";
import Styles from "../../Style.js";



let OrganizationMatch = ({ route, navigation }) => {
    const { name, organization } = route.params;

    let interestArea = useSelector(state => state.user.interestArea);

    return (
        <View flex padding-page>
            <BackArrow navigation={navigation} />

            <Text heading center nonBlackBlack marginB-s4>Congratulations!</Text>
            <Text center body fadedSubtext>We assigned you and {JSON.stringify(name).slice(1, -1)} an organization to volunteer at: <Text bold>{JSON.stringify(organization).slice(1, -1)}</Text></Text>
            <Text center body italic fadedSubtext marginB-s4 marginT-s6>
                {(organization == 'Ecumenical Hunger Program' ? '​EHP’s mission is to provide compassionate, dignified and practical assistance to families and individuals experiencing economic and personal hardship.'
                    : 'The Peninsula Humane Society & SPCA is a local, private, non-profit charitable organization dedicated to animal welfare.')}
            </Text>

            <View centerH>
                <Card style={[Styles.blueCard, Styles.boxShadow]} centerH >
                    <Image style={{ width: 280, height: 200, borderRadius: 10 }} source={organization == 'Ecumenical Hunger Program' ? require("../../assets/images/food.png") : require("../../assets/images/dog.png")} />
                </Card>
            </View>
            <View centerH>
                <Text style={[Styles.nonButtonTag]}>
                    <Text body nonBlackBlack>{interestArea}</Text>
                </Text>
            </View>
            <Button style={[Styles.greenButton, Styles.boxShadow]} label={'Coordinate volunteering'} onPress={() => navigation.navigate('MatchingChat', {
                name: name,
                organization: organization
            })} />
        </View>
    );
}
export default OrganizationMatch;
