import React from "react";
import { Pressable , StyleSheet } from "react-native";
import { Text, View } from "react-native-ui-lib";
import _ from "underscore";
import ProfilePic from "./ProfilePic";
import Styles from "../Style.js";



let Journal = ({ journal, index, openModal }) => {

  return (

    _.map(journal.prompts[index].responses, (message, index) => {
      return (

        <Pressable onPress={() => openModal(index)}>

          <View style={[StylesExpand.threadCard, Styles.noHorizontalPadding]} > 
            <View  backgroundColor="D4D4D4" left>
              <View marginH-s2 style={[Styles.alignRow]} centerH paddingB-s6> 
                <ProfilePic id={message.message.user} />
                <Text bold smallBody> {'Answered by ' + message.message.user} </Text>
              </View>
              


              <Text marginH-s6>{message.message.body}</Text>
            </View>
           
            </Pressable>)
                
            })

              {_.map(message.replies, (reply) => {
                  return (
                    <Pressable>
                      <View>
                      <View style={StylesExpand.verticalLine}/> 
                        <Text>{reply.message.body}</Text>
                        <Text> {'By ' + reply.message.user} </Text>

                      </View>
                    </Pressable>)
                })
              }
          </View>

            
          </View> 
          
          
        </Pressable>)
    })

  );

}

const StylesExpand = StyleSheet.create({
  threadCard: {
    backgroundColor: "#DBDBDB",
    height: 150,
    width: "100%",
    paddingTop: 10,
    marginBottom: 30,
  },
  verticalLine: {
    height: '100%',
    width:1,
    backgroundColor: "#818181"
  }
});

export default Journal; 