import { View, Text, Image, Button} from "react-native-ui-lib";



let GetMatchedIntro = () => {
    return (
        <View> 
            <Text> Get Matched</Text>
            <Text> To be matched with another volunteer, first create a profile so our algorithm can work its magic ✨ </Text>
            <Button label={'Complete profile'}/> 
        </View>
    );
}

export default GetMatchedIntro