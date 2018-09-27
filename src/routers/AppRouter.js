import { createStackNavigator } from 'react-navigation';

import HomeScreen from '@screens/HomeScreen';
import NoteScreen from '@screens/NoteScreen';

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
