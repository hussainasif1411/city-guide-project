import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../src/Home'
import Login from '../src/Login';

//Creating react navigation for the app
const Navigator = createStackNavigator(
    {
        Home: Home,
        Login: Login
    },
    {
        initialRouteName: 'Home',
        headerMode:false,
    }
);

const AppRoute = createAppContainer(Navigator);

export default AppRoute;