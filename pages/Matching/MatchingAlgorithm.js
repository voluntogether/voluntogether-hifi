import { View, Text, Image, Button} from "react-native-ui-lib";



let MatchingAlgorithm = () => {
    return (
        <View> 
            <Text> Success! </Text>
            <Text>Please wait while our algorithm finds you a volunteer partner! </Text>
            <Image source={require('./assets/blobs/match-4-blob.svg')}/>
        </View>
    );
}

export default MatchingAlgorithm