import React from "react";
import { TouchableHighlight } from 'react-native';
import { View, Text, Image, Button, Incubator, Card, TouchableHigh } from "react-native-ui-lib";
import Svg, {Path, G, Rect} from 'react-native-svg';
import Styles from "../../Style.js";

let ChipsInput = Incubator.ChipsInput

let ProfileVolunteerAreas = ({ navigation }) => {
    return (
        <View flex padding-page>
            <Text heading center nonBlackBlack marginB-s4> Make Your Profile </Text>
            <Text center={true} body fadedSubtext marginB-s4  marginT-s6> Tap to select the volunteer areas that interest you. </Text>


            <View center marginB-s4 style={[Styles.boxShadow]}>
                <Svg width="339" height="154" viewBox="0 0 339 154" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <G filter="url(#filter0_d_192_6612)">
                    <Rect x="4" width="331" height="146" rx="12" fill="#A4C1E3"/>
                    </G>
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M69.1667 31.2602C81.3332 28.5157 95.4451 29.9605 104.424 38.5156C113.489 47.1521 115.205 61.0213 113.305 73.3141C111.649 84.026 103.409 91.8284 95.0899 98.8998C87.5794 105.284 78.9872 112.161 69.1667 110.834C59.9323 109.586 55.4706 99.7908 49.4868 92.7377C44.3411 86.6727 37.8048 81.211 37.3343 73.3141C36.8426 65.0626 42.0151 58.085 47.0274 51.4631C53.2808 43.2017 58.981 33.5579 69.1667 31.2602Z" fill="#C1E3A4"/>
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M164.134 39.0016C176.665 38.8379 183.896 51.4649 187.763 63.3163C191.624 75.1465 192.513 88.6832 182.972 96.7272C170.972 106.844 152.952 112.825 140.74 102.961C129.496 93.879 137.39 77.4458 142.341 63.9095C146.523 52.476 151.898 39.1614 164.134 39.0016Z" fill="#EAF3D7"/>
                    <Path fill-rule="evenodd" clip-rule="evenodd" d="M211.2 76.22C209.325 65.0634 221.005 55.6742 229.959 48.6758C237.445 42.8251 247.838 43.9256 256.762 40.6102C264.841 37.6085 271.314 28.7434 279.824 30.1501C288.342 31.5582 291.489 42.1432 298.254 47.4689C305.458 53.1395 318.594 53.4809 320.734 62.3546C322.907 71.3623 310.987 77.6266 307.612 86.2617C304.647 93.8449 307.787 103.556 302.274 109.575C296.677 115.687 287.376 116.402 279.113 117.38C271.011 118.34 262.626 118.579 255.236 115.146C247.881 111.729 244.386 103.791 238.322 98.4308C229.389 90.5339 213.169 87.9306 211.2 76.22Z" fill="#A4E3C6"/>
                </Svg>
            </View>
            {/* <Button label={'🏀 Sports'}/>
            <Button label={'💻 Technology'}/>
            <Button label={'🐳 Animal Welfare'}/>
            <Button label={'📚 Education'}/>
            <Button label={'🏥 Health'}/>
            <Button label={'🎭 The Arts'}/>
            <Button label={'📋 Politics'}/>
            <Button label={'🥗 Food Sustainability'}/> */}
            <View>
                <ChipsInput
                    placeholder={'Add new passions...'}
                    chips={[
                        { label: '🏀 Sports' },
                        { label: '💻 Technology' },
                        { label: '🐳 Animal Welfare' },
                        { label: '📚 Education' },
                        { label: '🏥 Health' },
                        { label: '🎭 The Arts'},
                        { label: '📋 Politics'},
                        { label: '🥗 Food Sustainability'},
                        ]}
                />
            </View>

            <View flex right bottom>
                <Button nonBlackBlack style={[Styles.yellowButton]} label={'>'} onPress={() => navigation.navigate('ProfileAvailability')} />
            </View>

            {/* <Text body fadedSubtext marginB-s4 center> Tap to select the volunteer areas that interest you. </Text>

            <View style={{ marginHorizontal: 15, alignContent:'space-between'}}>
                <Card height={200} center padding-card marginB-s4 paddingB={200}>
                    <Text heading center todo> ADD BLOB HERE!!!! </Text>
                </Card>

                <ChipsInput
                    placeholder={'Add new passions...'}
                    chips={[
                        { label: '🏀 Sports' },
                        { label: '💻 Technology' },
                         { label: '🐳 Animal Welfare' },
                        { label: '📚 Education' },
                        { label: '🏥 Health' },
                        { label: '🎭 The Arts'},
                        { label: '📋 Politics'},
                        { label: '🥗 Food Sustainability'},
                        ]}
                />
                <View>
                    <Button label={'Get matched'} paddingT={40} onPress={() => navigation.navigate('ProfileAvailability')} />
                </View>

            </View>            */}

        </View>
    );
}

export default ProfileVolunteerAreas;
