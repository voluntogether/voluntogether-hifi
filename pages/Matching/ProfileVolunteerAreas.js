import React from "react";

import { View, Text, Image, Button} from "react-native-ui-lib";



let ProfileVolunteerAreas = () => {
    return (
        <View> 
            <Text> Make Your Profile </Text>
            <Text> Tap to select the volunteer areas that interest you. </Text>
            {/* <Image source={require('/assets/blobs/match-2-blob.svg')}/> */}
            <Button label={'🏀 Sports'}/> 
            <Button label={'💻 Technology'}/>
            <Button label={'🐳 Animal Welfare'}/> 
            <Button label={'📚 Education'}/>
            <Button label={'🏥 Health'}/> 
            <Button label={'🎭 The Arts'}/>
            <Button label={'📋 Politics'}/> 
            <Button label={'🥗 Food Sustainability'}/>
        </View>
    );
}

export default ProfileVolunteerAreas;