import React from "react";
import { useSelector } from "react-redux";

import { userLookup } from "../util/util";
import { View, Image } from "react-native-ui-lib";


let MiniProfilePic = ({ id }) => {

    let users = useSelector(state => state.user)


    let user = userLookup(id, users)

    return (
        <View style={{
            borderRadius: 10,
            width: 15,
            height: 15,
            // backgroundColor: '#fff',
            backgroundColor: 'red',
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 10,
            marginBottom: 10,
            marginTop: 30
        }}>
            <Image
                source={user.photoType == "base64" ? { uri: 'data:image/png;base64,' + user.photo } : { uri: user.photo }}
                style={{
                    width: 25,
                    height: 25,
                    borderRadius: 50,                
                }}
            />
        </View>
    )


}

export default MiniProfilePic
