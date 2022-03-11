import React from 'react';
import Styles from "../../Style.js";
import Svg, { Path, G, Rect, Circle } from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { Text, View } from "react-native-ui-lib";
import { useSelector } from 'react-redux';
import BackArrow from '../../components/BackArrow';
import { hardshipsData, inspirationsData, lessonsData, goalsData } from "../../util/Prompts"


const ViewPrompts = ({ navigation, route }) => {

  let { id, category, icon } = route.params;
  let data = {}
  switch (category) {
    case "Lessons":
      data = lessonsData;
      break;
    case "Goals":
      data = goalsData;
      break;
    case "Hardships":
      data = hardshipsData;
      break;
    case "Inspirations":
      data = inspirationsData;
      break;
    default:
      break;
  }


  const Item = ({ title }) => (
    <Pressable onPress={() => {
      navigation.navigate("CreateThread", {
        prompt: title,
        id,
        category: category,
        icon: icon
      })
    }}>
      <View style={stylesPrompts.item}>
        <Text style={stylesPrompts.title}>{title}</Text>
      </View>
    </Pressable>

  );

  const renderItem = ({ item }) => (

    <Item title={item.title} />
  );



  return (
    <View flex padding-page >
      <BackArrow navigation={navigation} />
      <View marginB-10 />

      <View>
        <Text heading center nonBlackBlack marginB-s10 marginT-s8>{category + ' Prompts'}</Text>
      </View>
      <View centerH>

        {category === 'Hardships' &&
          (
            <View paddingT-s6 centerH style={stylesPrompts.backgroundCard}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Svg marginT-s8 style={{ justifyContent: 'center', alignItems: 'center' }} width="101" height="108" viewBox="0 0 101 108" fill="none" xmlns="http://www.w3.org/2000/svg" style={[Styles.boxShadow]}>
                  <Path fill-rule="evenodd" clip-rule="evenodd" d="M58.1831 5.59232C66.3843 6.19851 74.9147 0.864172 82.4965 4.06377C90.0693 7.25958 95.1451 14.9888 98.4017 22.565C101.421 29.5897 101.521 37.6344 100.163 45.1633C98.9993 51.6099 91.526 55.822 91.2191 62.3663C90.8163 70.9581 100.453 78.5599 98.2077 86.8602C96.1805 94.355 87.4812 98.0232 80.6115 101.584C73.6469 105.194 65.8363 109.301 58.1831 107.606C50.442 105.893 47.2946 95.8565 40.0581 92.6058C32.5281 89.2234 22.9889 92.9461 15.9456 88.6333C8.48962 84.0678 1.03442 76.8368 0.0666526 68.1179C-0.921137 59.2186 9.3717 52.7732 10.9878 43.9672C12.6996 34.64 5.52455 24.4336 9.64951 15.9026C13.6711 7.58537 23.0797 2.25035 32.0838 0.337565C40.8748 -1.52996 49.222 4.92997 58.1831 5.59232Z" fill="#A4C1E3" />
                  <View style={{ justifyContent: 'center', alignItems: 'center' }} marginT-s8>
                    <FontAwesome5 name={'dumbbell'} size={40} color={"white"} />
                  </View>
                </Svg>
              </View>

              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View>
          )}

        {category === 'Lessons' &&
          (
            <View paddingT-s6 centerH style={stylesPrompts.backgroundCard}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Svg style={{ justifyContent: 'center', alignItems: 'center' }} width="110" height="100" viewBox="0 0 110 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={[Styles.boxShadow]}>
                  <Path fill-rule="evenodd" clip-rule="evenodd" d="M55.1585 0.5773C66.9111 4.21154 66.9199 21.0459 73.573 31.3334C77.1569 36.8752 80.8088 41.8178 85.0849 46.852C93.2674 56.4853 109.621 61.6115 109.993 74.2107C110.339 85.9462 98.0919 96.6525 86.6408 99.5573C75.5429 102.372 66.2525 90.9513 55.1585 88.1205C47.9824 86.2894 40.7168 87.9903 33.5788 86.0174C22.5146 82.9593 8.23808 83.3663 2.40393 73.5394C-3.34993 63.8477 2.48353 51.3057 6.79327 40.9004C10.8337 31.1453 17.8469 23.3976 25.9806 16.6165C34.7087 9.3397 44.2789 -2.78701 55.1585 0.5773Z" fill="#A6A4E3" />
                  <View style={{ justifyContent: 'center', alignItems: 'center' }} marginT-s10>
                    <View marginT-s2>
                      <FontAwesome5 style={{ justifyContent: 'center', alignItems: 'center' }} name={'chalkboard-teacher'} size={35} color={"white"} />
                    </View>
                  </View>
                </Svg>
              </View>

              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View>
          )}

        {category === 'Goals' &&
          (
            <View paddingT-s6 centerH style={stylesPrompts.backgroundCard}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Svg style={{ justifyContent: 'center', alignItems: 'center' }} width="128" height="103" viewBox="0 0 128 103" fill="none" xmlns="http://www.w3.org/2000/svg" style={[Styles.boxShadow]}>
                  <Path fill-rule="evenodd" clip-rule="evenodd" d="M61.4246 0C94.9774 0 128 20.7924 128 54.4034C128 86.6188 93.5843 102.957 61.4246 102.957C30.8681 102.957 0 85.0128 0 54.4034C0 22.3285 29.4052 0 61.4246 0Z" fill="#FAE269" />
                  <View style={{ justifyContent: 'center', alignItems: 'center' }} marginT-s8>
                    <FontAwesome5 style={{ justifyContent: 'center', alignItems: 'center' }} name={'medal'} size={40} color={"white"} />
                  </View>
                </Svg>
              </View>

              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View>
          )}

        {category === 'Inspirations' &&
          (
            <View paddingT-s6 centerH style={stylesPrompts.backgroundCard}>
              <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Svg style={{ justifyContent: 'center', alignItems: 'center' }} width="116" height="113" viewBox="0 0 116 113" fill="none" xmlns="http://www.w3.org/2000/svg" style={[Styles.boxShadow]} >
                  <Path fill-rule="evenodd" clip-rule="evenodd" d="M57.1199 14.6755C70.2159 16.5789 86.3329 6.99216 95.2653 16.6606C104.192 26.3224 91.4796 41.533 93.8349 54.4161C97.4113 73.9778 126.275 94.7505 112.121 108.855C97.9859 122.94 76.2052 97.1086 57.1199 91.0027C47.398 87.8924 36.9776 88.5641 28.9896 82.2589C19.9093 75.0916 14.0182 65.4522 10.7681 54.4161C5.77281 37.4542 -7.64902 15.2313 5.84319 3.66347C19.5861 -8.11929 39.1309 12.0608 57.1199 14.6755Z" fill="#C1E3A4" />
                  <View style={{ justifyContent: 'center', alignItems: 'center' }} marginT-s8>
                    <FontAwesome5 style={{ justifyContent: 'center', alignItems: 'center' }} name={'lightbulb'} size={40} color={"white"} />
                  </View>
                </Svg>
              </View>

              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
              />
            </View>
          )}


      </View>


    </View>
  );
}

const stylesPrompts = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#345f93',
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 16,
    borderBottomWidth: 0.4,
    borderBottomColor: "#FFFFFF"

  },
  title: {
    fontSize: 16,
    color: '#F7FDF8'
  },
  backgroundCard: {
    backgroundColor: '#345f93',
    borderRadius: 10,
    minHeight: 500,
    width: 330,
  }
});

export default ViewPrompts;
