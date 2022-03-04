import React from "react";
import { View, Text, Image, Button} from "react-native-ui-lib";
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
import Styles from "../../Style.js";



let MatchingAlgorithm = ({navigation, route}) => {
    let { rematch } = route.params;
    console.log(rematch);
    return (
        <View flex padding-page>
            <Text heading center nonBlackBlack marginB-s4 > Success! </Text>
            <Text center={true} body fadedSubtext marginB-s4  marginT-s6 >{
            rematch ?
            'Please wait while our algorithm finds you a new volunteer partner!'
            : 'Please wait while our algorithm finds you a volunteer partner!'}</Text>
            <View>
                <Svg width="358" height="352" viewBox="0 0 358 352" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M249.72 83.3462C268.996 104.262 255.484 137.768 260.506 166.245C266.345 199.356 295.288 229.713 281.036 260.922C265.338 295.299 226.94 320.897 190.019 320.601C155.206 320.322 137.67 282.391 112.042 259.566C89.2103 239.231 58.2432 226.33 50.4646 196.308C41.7152 162.538 46.6755 123.209 69.5913 95.7229C92.0465 68.7892 129.179 63.2161 163.385 60.8657C194.579 58.7224 228.875 60.7292 249.72 83.3462Z" fill="#C1E3A4"/>
                    <Path opacity="0.6" fill-rule="evenodd" clip-rule="evenodd" d="M187.962 61.1246C221.322 66.2694 240.295 96.832 261.98 122.737C284.804 150.002 318.126 175.221 312.939 210.419C307.498 247.336 271.323 269.207 237.948 285.802C203.902 302.729 166.555 313.519 130.639 301.058C88.9188 286.584 48.2899 259.121 37.4748 216.25C26.448 172.539 47.1476 126.779 78.5168 94.4432C106.471 65.6276 148.313 55.01 187.962 61.1246Z" fill="#A4E3C6"/>
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M171.522 89.4065C197.702 94.2387 213.039 117.447 229.507 138.338C245.768 158.965 263.786 179.109 262.92 205.348C261.8 239.256 255.27 280.004 224.366 294.095C193.702 308.077 163.109 279.543 132.883 264.639C103.296 250.049 66.6399 242.002 55.6847 210.918C43.6753 176.843 53.6076 136.638 78.5498 110.474C101.603 86.2922 138.645 83.3381 171.522 89.4065Z" fill="#A4E3A7"/>
                    <G filter="url(#filter0_d_222_6692)">
                    <Circle cx="229.461" cy="216.461" r="50.4614" fill="#F6CA44"/>
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M215.176 256.384C246.255 256.384 271.45 231.19 271.45 200.11C271.45 195.991 271.007 191.974 270.167 188.106C276.296 196.361 279.923 206.586 279.923 217.658C279.923 245.061 257.708 267.276 230.305 267.276C216.603 267.276 204.199 261.722 195.22 252.743C201.422 255.096 208.148 256.384 215.176 256.384Z" fill="#FAE269"/>
                    <Circle cx="128.461" cy="146.461" r="50.4614" fill="#F6CA44"/>
                    </G>
                </Svg>
            </View>

            <View flex right bottom>
                {(rematch ? <Button label={'>'} nonBlackBlack style={[Styles.yellowButton]} onPress={() => navigation.navigate('GetMatched', { name: 'Nathan' })}/> : <Button label={'>'} nonBlackBlack style={[Styles.yellowButton]} onPress={() => navigation.navigate('GetMatched', { name: 'Emily' })}/>)}
            </View>


        </View>
    );
}

export default MatchingAlgorithm
