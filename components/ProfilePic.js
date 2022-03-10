import React from "react";
import { useSelector } from "react-redux";

import { userLookup } from "../util/util";
import { View, Image } from "react-native-ui-lib";


let ProfilePic = ({ id }) => {

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
            margin: 20
        }}>
            <Image
                source={user.photoType == "base64" ? { uri: 'data:image/png;base64,' + user.photo } : { uri: user.photo }}
                style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50
                }}
            />
        </View>
    )


}

export default ProfilePic