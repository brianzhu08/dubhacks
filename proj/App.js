import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Login from './src/components/Login';

const navigator = createStackNavigator(
  {
    Home: Login
  }
);

export default createAppContainer(navigator);