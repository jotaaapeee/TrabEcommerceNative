import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerCarrinho from '../DrawerCarrinho';
import Carrinho from '../../pages/Carrinho';
import Perfil from '../../pages/Perfil'
import Home from '../../pages/Home'
import React from 'react'

const Tab = createBottomTabNavigator();
const TabNavigator = ({ navigation }) => {

    return (
        <Tab.Navigator
            initialRouteName='Home'
            tabBarOptions={{
                keyboardHidesTabBar: true,
                activeTintColor: 'white',
                inactiveTintColor: 'gray',
                activeBackgroundColor: '#343A40',
                inactiveBackgroundColor: '#343A40'
            }}
        >
            <Tab.Screen
                name = 'Menu'
                component = {DrawerCarrinho}
                listeners = {({ navigation }) => ({
                    tabPress: e => {
                        e.preventDefault();
                        navigation.openDrawer();
                    }
                })} />
                
                
            <Tab.Screen name = 'Carrinho' component = {Carrinho} />
            <Tab.Screen name = 'Home' component = {Home} />
            <Tab.Screen name = 'Perfil' component = {Perfil} />
        </Tab.Navigator>
    )
}
export default TabNavigator;