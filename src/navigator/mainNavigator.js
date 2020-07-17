import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile79509Navigator from '../features/UserProfile79509/navigator';
import Settings79508Navigator from '../features/Settings79508/navigator';
import Settings79506Navigator from '../features/Settings79506/navigator';
import SignIn279504Navigator from '../features/SignIn279504/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile79509: { screen: UserProfile79509Navigator },
Settings79508: { screen: Settings79508Navigator },
Settings79506: { screen: Settings79506Navigator },
SignIn279504: { screen: SignIn279504Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
