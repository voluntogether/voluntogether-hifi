/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import { Colors, Spacings, Typography } from "react-native-ui-lib";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Intro from "./Intro";
import state from './state/store';



LogBox.ignoreAllLogs()


const App = () => {

  const { store, persistor } = state;

  Colors.loadColors({
    background: '#f4f4f4',
    deeperMatcha: '#9DB865',
    nonBlackBlack: '#10123D',
    fadedSubtext: '#413D45',
    lightBlue: '#A4C1E3',
    darkBlue: '#345F93',
    backgroundOffWhite: '#F7FDF8',
    nonWhiteWhite: '#F7FDF8',
    todo: '#FF0000'
  });

  Typography.loadTypographies({
    megaHeading: { fontSize: 35, fontWeight: "bold" },
    heading: { fontSize: 25, fontWeight: '600' },
    subHeading: { fontSize: 18, fontWeight: '600' },
    categoryTitle: { fontSize: 18, fontWeight: '600' },
    buttonArrow: { fontSize: 18, fontWeight: "600" },
    buttonText: { fontSize: 16, fontWeight: '400' },
    smallBody: { fontSize: 10, lineHeight: 21, fontWeight: '400' },
    body: { fontSize: 14, lineHeight: 21, fontWeight: '400' },
    bigBody: { fontSize: 16, lineHeight: 21, fontWeight: '600' },
    italic: { fontStyle: "italic" },
  });

  Spacings.loadSpacings({
    page: 20,
    card: 12,
    gridGutter: 16
  });


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Intro />
      </PersistGate>
    </Provider>
  );
};

export default App;
