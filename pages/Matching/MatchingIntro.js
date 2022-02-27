
import { View, Text, Image, Button} from "react-native-ui-lib";



let MatchingIntro = () => {
    return (
        <View> 
            <Text> Connect </Text>
            <Text> There are two ways to connect with other people on voluntogether. You can either invite a friend
            nor match with a stranger who is already on the app.</Text>
            <Button label={'Get matched'}/> 
            <Button label={'Invite a friend'}/>
        </View>
    );
}

export default MatchingIntro;