import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from "../view/screens/Home/Container";
import EachTripScreen from "../view/screens/EachTrip/Container";

const MainNavigator = createStackNavigator({
    Home: { screen: HomeScreen },
    EachTrip: { screen: EachTripScreen }
});

const Router = createAppContainer(MainNavigator);

export default Router;