import React from "react";
import { View, Text, Image, Button, Card } from "react-native-ui-lib";
import { StyleSheet, Pressable } from "react-native";
import _ from "underscore"


let Journal = ({ journal, index }) => {

    return (

        _.map(journal.prompts[index].responses, (response) => {
            return (
              <Pressable>
                <View>
                  <Text>{response.message.body}</Text>
                  <Text> {'By ' + response.message.user} </Text>
                  {_.map(response.replies, (reply) => {
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