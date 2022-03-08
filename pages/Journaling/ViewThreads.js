import React from "react";
import { View, Text, Image, Button, Card } from "react-native-ui-lib";
import { useSelector, useDispatch } from "react-redux";
import wording from '../../assets/wording';
import Styles from "../../Style.js";
import { StyleSheet, Pressable } from "react-native";
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RotateInUpLeft } from "react-native-reanimated";
import BackArrow from "../../components/BackArrow";
import _ from "underscore"

let ViewThreads = ({ navigation, route }) => {
  const { journal } = route.params;
  return (
    <View flex padding-page >
      <View marginB-70 />
      <BackArrow navigation={navigation} />
      <Text heading center nonBlackBlack marginB-s4> {journal.organization} </Text>
      <Text center body fadedSubtext marginB-s8>
        Journal together with your volunteer partner(s) online by uploading responses to prompts.
      </Text>

      {journal.prompts.length > 0 ? _.map(journal.prompts, (prompt) => {
        return (
          <Pressable>
            <View>
              <Text>{prompt.prompt}</Text>
              <FontAwesome5 name={prompt.icon} size={20} />
            </View>
          </Pressable>)
      }) : <Text>Uh oh. No prompts, go make one</Text>
      }

      <View flex right bottom>
        <Button bold buttonArrow nonBlackBlack style={[Styles.yellowButton]} label={"+"} onPress={() => navigation.navigate('ViewPromptCategories', {journal})} />
      </View>
    </View>
  );
}

export default ViewThreads;
