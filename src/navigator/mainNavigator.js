import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2174983Navigator from '../features/BlankScreen2174983/navigator';
import EmailAuth1170492Navigator from '../features/EmailAuth1170492/navigator';
import BlankScreen0170491Navigator from '../features/BlankScreen0170491/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2174983: { screen: BlankScreen2174983Navigator },
EmailAuth1170492: { screen: EmailAuth1170492Navigator },
BlankScreen0170491: { screen: BlankScreen0170491Navigator },

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
