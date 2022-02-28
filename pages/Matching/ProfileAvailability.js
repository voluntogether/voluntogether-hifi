import React from "react";

import { View, Text, Image, Button} from "react-native-ui-lib";



let ProfileVolunteerAreas = () => {
    return (
        <View> 
            <Text> Make Your Profile </Text>
            <Text> Tap to select the times that you are generally free.</Text>
            <Image source={require('./assets/blobs/match-3-blob.svg')}/>
            <Button label={'Mon morning'}/> 
            <Button label={'Tue morning'}/>
            <Button label={'Wed morning'}/> 
            <Button label={'Thu morning'}/>
            <Button label={'Fri morning'}/> 
            <Button label={'Sat morning'}/>
            <Button label={'Sun morning'}/> 
            <Button label={'Mon afternoon'}/>
            <Button label={'Tue afternoon'}/>
            <Button label={'Wed afternoon'}/>
            <Button label={'Thu afternoon'}/>
            <Button label={'Fri afternoon'}/>
            <Button label={'Sat afternoon'}/>
            <Button label={'Sun afternoon'}/>
        </View>
    );
}

export default ProfileVolunteerAreas;