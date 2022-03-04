import React from "react";
import { View, Text, Image, Button } from "react-native-ui-lib";
import Svg, {Path, G, Circle} from 'react-native-svg';
import Styles from "../../Style.js";



let ReconsiderMatching = ({ navigation }) => {
    return (
        <View flex padding-page centerH>
            <Text heading center nonBlackBlack marginB-s4 >Get Matched</Text>
            <Text center={true} body fadedSubtext marginB-s4  marginT-s6>Picky, aren’t you? Unfortunately our prototype has a limited number of partners for you to match with. Why don’t you reconsider Emily? </Text>
            <View center marginB-s4>
                <Svg width="333" height="327" viewBox="0 0 333 327" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <G filter="url(#filter0_d_192_8431)">
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M161.196 0.0861309C202.672 2.37127 218.37 53.5982 247.592 83.0839C276.526 112.278 327.678 128.316 328.973 169.374C330.274 210.605 284.021 233.801 253.213 261.276C225.126 286.324 198.849 318.918 161.196 319C123.497 319.082 96.0635 287.657 68.7749 261.68C40.4676 234.733 4.85648 208.421 4.01531 169.374C3.16567 129.932 37.8524 101.935 64.7105 73.008C93.22 42.3026 119.331 -2.22038 161.196 0.0861309Z" fill="#345F93"/>
                    <Circle cx="214.461" cy="191.461" r="50.4614" fill="#F6CA44"/>
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M200.175 231.384C231.255 231.384 256.45 206.19 256.45 175.11C256.45 170.991 256.007 166.974 255.166 163.106C261.296 171.361 264.923 181.586 264.923 192.658C264.923 220.061 242.708 242.276 215.305 242.276C201.603 242.276 189.199 236.722 180.22 227.743C186.422 230.096 193.148 231.384 200.175 231.384Z" fill="#FAE269"/>
                    <Circle cx="113.461" cy="129.461" r="50.4614" fill="#F6CA44"/>
                    </G>
                </Svg>
            </View>

            <Button backgroundColor={'#9DB865'} label={'Rematch Now'} onPress={() => navigation.navigate('GetMatched', {
                name: 'Emily'
            })}/>

        </View>


    );
}

export default ReconsiderMatching
