import { createStackNavigator } from 'react-navigation';

import HomeScreen from '@screens/HomeScreen.js';
import NoteScreen from '@screens/NoteScreen.js';

const AppRouter = createStackNavigator(
  {
    HomeScreen,
    NoteScreen
  },
  {
    initialRouteName: 'HomeScreen',
  }
);

export default AppRouter;
