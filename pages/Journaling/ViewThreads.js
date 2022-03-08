import React from "react";
import { View, Text, Image, Button, Card } from "react-native-ui-lib";
import { useSelector, useDispatch } from "react-redux";
import wording from '../../assets/wording';
import Styles from "../../Style.js";
import { StyleSheet, Pressable } from "react-native";
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RotateInUpLeft } from "react-native-reanimated";

let ViewThreads = ({ navigation, route}) => {
    const { organization } = route.params;
  return (
    <View flex padding-page >
      <View marginB-70 />
        <Text heading center nonBlackBlack marginB-s4> {organization} </Text>
        <Text center body fadedSubtext marginB-s8>
        Journal together with your volunteer partner(s) online by uploading responses to prompts.
        </Text>

        {/* Need some way to query the state to check if there are any journals */}

        <View flex right bottom>
            <Button bold buttonArrow nonBlackBlack style={[Styles.yellowButton]} label={"+"} onPress={() => navigation.navigate('ViewPromptCategories')}/>
        </View>
    </View>
  );
}

export default ViewThreads;
