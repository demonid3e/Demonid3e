import * as React from 'react';
import { AppRegistry } from 'react-native';
import {DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import App from './src/index';


const appName = "Cards";


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'blue',
    accent: 'yellow',
  },
};

console.log(appName, "app name");
export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);