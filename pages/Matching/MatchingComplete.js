import React from "react";
import Svg, { Path } from 'react-native-svg';
import { Button, Text, View } from "react-native-ui-lib";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Styles from "../../Style.js";

let MatchingComplete = ({ navigation }) => {
    return (
        <View flex padding-page backgroundColor={"#345F93"}>

            <View marginB-20 />
            <View marginT-30 marginL-5 left top>
                <FontAwesome5 name="arrow-left" size={20} color="white" onPress={() => navigation.goBack()} />
            </View>

            <Text heading center backgroundOffWhite marginB-s4>Have fun volunteering!</Text>

            <View center style={[Styles.boxShadow]}>
                <Svg width="267" height="263" viewBox="0 0 267 263" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M186.342 62.1932C200.726 77.8003 190.643 102.803 194.39 124.053C198.748 148.76 220.345 171.413 209.71 194.701C197.996 220.353 169.344 239.455 141.793 239.234C115.815 239.025 102.73 210.721 83.606 193.689C66.569 178.515 43.4612 168.888 37.6568 146.486C31.1279 121.287 34.8293 91.9391 51.9292 71.4288C68.6853 51.3308 96.3938 47.172 121.919 45.4182C145.196 43.8188 170.787 45.3164 186.342 62.1932Z" fill="#C1E3A4" />
                    <Path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M140.258 45.6114C165.152 49.4504 179.309 72.2564 195.491 91.5865C212.522 111.932 237.387 130.75 233.516 157.015C229.456 184.563 202.462 200.883 177.557 213.266C152.153 225.897 124.284 233.949 97.4835 224.651C66.3515 213.85 36.0341 193.357 27.9638 161.366C19.7356 128.749 35.1817 94.6032 58.5895 70.4739C79.4489 48.9715 110.671 41.0486 140.258 45.6114Z" fill="#A4E3C6" />
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M127.99 66.7154C147.526 70.3212 158.971 87.6397 171.259 103.228C183.393 118.62 196.838 133.652 196.192 153.231C195.356 178.533 190.483 208.94 167.423 219.455C144.541 229.888 121.712 208.596 99.1581 197.475C77.0795 186.588 49.7269 180.583 41.5521 157.388C32.5907 131.961 40.0022 101.96 58.6142 82.4364C75.8165 64.3915 103.457 62.1872 127.99 66.7154Z" fill="#A4E3A7" />
                </Svg>
            </View>

            <Text center={true} body backgroundOffWhite marginB-s10 marginT-s6>
                Congratulations on matching with a partner and organization!
                For this prototype, please imagine you coordinated, met up, and volunteered together. After this, you would re-open voluntogether.
            </Text>
            {/* <Image source={require('/assets/blobs/match-11-blob.svg')}/> */}
            <Button style={[Styles.greenButton, Styles.boxShadow]} label={'Back to homepage'} onPress={() => navigation.navigate('Home')} />
        </View>

    );
}


export default MatchingComplete;
