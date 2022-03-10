import React from "react";
import { View, Text, Image, Button, Card } from "react-native-ui-lib";
import { StyleSheet, Pressable } from "react-native";
import _ from "underscore"


let Journal = ({ journal, index, openModal }) => {

  return (

    _.map(journal.prompts[index].responses, (message, index) => {
      return (
        <Pressable onPress={() => openModal(index)}>
          <View>
            <Text>{message.message.body}</Text>
            <Text> {'By ' + message.message.user} </Text>
            {_.map(message.replies, (reply) => {
              return (
                <Pressable>
                  <View>
                    <Text>{reply.message.body}</Text>
                    <Text> {'By ' + reply.message.user} </Text>

                  </View>
                </Pressable>)
            })


            }

          </View>
        </Pressable>)
    })

  );

}

export default Journal; 