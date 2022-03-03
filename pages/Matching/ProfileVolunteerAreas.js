import React from "react";

import { View, Text, Image, Button, Incubator, Card } from "react-native-ui-lib";

let ChipsInput = Incubator.ChipsInput


let ProfileVolunteerAreas = ({ navigation }) => {
    return (
        <View flex padding-page>
            <Text heading center nonBlackBlack marginB-s4> Make Your Profile </Text>
            <Text body fadedSubtext marginB-s4 center> Tap to select the volunteer areas that interest you. </Text>

            <View style={{ marginHorizontal: 15, alignContent:'space-between'}}>
                <Card height={200} center padding-card marginB-s4 paddingB={200}>
                    <Text heading center todo> ADD BLOB HERE!!!! </Text>
                </Card>


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
                    chips={[
                        { label: '🏀 Sports' }, 
                        { label: '💻 Technology' }, 
                        { label: '🐳 Animal Welfare' }, 
                        { label: '📚 Education' },
                        { label: '🏥 Health' },
                        { label: '🎭 The Arts'},
                        { label: '📋 Politics'},
                        { label: '🥗 Food Sustainability'},
                        ]}
                />
                <View> 
                    <Button label={'Get matched'} paddingT={40} onPress={() => navigation.navigate('ProfileAvailability')} />
                </View>
                
            </View>            
        </View>
    );
}

export default ProfileVolunteerAreas;