import React from "react";

import { View, Text, Image, Button, Incubator } from "react-native-ui-lib";

let ChipsInput = Incubator.ChipsInput


let ProfileVolunteerAreas = ({ navigation }) => {
    return (
        <View>
            <Text> Make Your Profile </Text>
            <Text> Tap to select the volunteer areas that interest you. </Text>
            {/* <Image source={require('/assets/blobs/match-2-blob.svg')}/> */}
            {/* <Button label={'🏀 Sports'}/> 
            <Button label={'💻 Technology'}/>
            <Button label={'🐳 Animal Welfare'}/> 
            <Button label={'📚 Education'}/>
            <Button label={'🏥 Health'}/> 
            <Button label={'🎭 The Arts'}/>
            <Button label={'📋 Politics'}/> 
            <Button label={'🥗 Food Sustainability'}/> */}

            <ChipsInput
                placeholder={'Add new passions...'}
                chips={[{ label: '🏀 Sports' }, { label: '💻 Technology' }, { label: '🐳 Animal Welfare' }, { label: '📚 Education' }]}
            />

            <Button label={'Get matched'} onPress={() => navigation.navigate('ProfileAvailability')} />

        </View>
    );
}

export default ProfileVolunteerAreas;