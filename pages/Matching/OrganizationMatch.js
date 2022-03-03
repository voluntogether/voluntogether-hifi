import React from "react";
import { View, Text, Image, Button } from "react-native-ui-lib";

let MatchingIntro = ({ navigation, name, organization }) => {
    return (
        <View>
            <Text> Congratulations! </Text>
            <Text> We assigned you and {name} an organization to volunteer at: {organization} </Text>
            <Text> 
                ​{(organization == 'Ecumenical Hunger Program' ? '​EHP’s mission is to provide compassionate, dignified and practical assistance to families and individuals experiencing economic and personal hardship. We offer material help support services, and advocacy for our neighbors in need, in a challenging and rapidly changing environment.' 
                : 'The Peninsula Humane Society & SPCA is a local, private, non-profit charitable organization dedicated to animal welfare. PHS/SPCA is an open admission shelter, not only accepting many pet animals who might be refused at other shelters, but also taking care of injured and orphaned native wildlife.')}
            </Text>
            {/* {(name == 'Ecumenical Hunger Program' ? <Image source={require('/assets/images/food.svg')}/> : <Image source={require('/assets/images/dog.svg')}/>)} */}
            <Button label={'Coordinate volunteering'} onPress={() => navigation.navigate('GetMatchedIntro')} />
        </View>
    );
}

export default MatchingIntro;