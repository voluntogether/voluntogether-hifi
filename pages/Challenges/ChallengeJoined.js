import React from "react";
import { View, Text, Image, Button, Card } from "react-native-ui-lib";
import { useSelector, useDispatch } from "react-redux";
import wording from '../../assets/wording';
import Styles from "../../Style.js";
import { StyleSheet, Pressable } from "react-native";
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RotateInUpLeft } from "react-native-reanimated";

let ChallengeJoined = ({ navigation, route}) => {
  return (
    <View flex padding-page >
      <View marginB-70 />
        <Text heading center nonBlackBlack marginB-s4> Explore Challenges </Text>
        {/* <Text center body fadedSubtext marginB-s8>
        Journal together with your volunteer partner(s) online by uploading responses to prompts.
        </Text> */}


            <View centerH>
                {/* <Pressable onPress={() => navigation.navigate('ExpandChallenges')}> */}
                    <Card style={[Styles.blueCard, Styles.boxShadow]} centerH >
                            {/* <Image style={{ width: 280, height: 200, borderRadius: 10 }} source={organization == 'Ecumenical Hunger Program' ? require("../../assets/images/food.png") : require("../../assets/images/dog.png")} /> */}
                    </Card>
                {/* </Pressable> */}
            </View>



        {/* Need some way to query the state to check if there are any journals */}
    </View>
  );
}

export default ChallengeJoined;
