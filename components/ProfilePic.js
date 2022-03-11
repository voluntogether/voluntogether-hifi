import React from "react";
import { useSelector } from "react-redux";

import { userLookup } from "../util/util";
import { View, Image } from "react-native-ui-lib";


let ProfilePic = ({ id, size=40 }) => {

    let users = useSelector(state => state.user)


    let user = userLookup(id, users)

    return (
        <View style={{
            borderRadius: 50,
            width: 20,
            height: 20,
            backgroundColor: '#fff',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 10
        }}>
            <Image
                source={user.photoType == "base64" ? { uri: 'data:image/png;base64,' + user.photo } : { uri: user.photo }}
                style={{
                    width: size,
                    height: size,
                    borderRadius: 50
                }}
            />
        </View>
    )


}

export default ProfilePic