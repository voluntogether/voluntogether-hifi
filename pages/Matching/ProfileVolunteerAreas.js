
import { View, Text, Image, Button} from "react-native-ui-lib";



let ProfileVolunteerAreas = () => {
    return (
        <View> 
            <Text> Make your profile </Text>
            <Text> Tap to select the volunteer areas that interest you. </Text>
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