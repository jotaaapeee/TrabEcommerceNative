import { createDrawerNavigator } from '@react-navigation/drawer';
import Cadastro from '../../pages/Produto/Cadastro';
import Checkout from '../../pages/Checkout';
import TabNavigator from '../TabNavigator'
import React from 'react';

const Drawer = createDrawerNavigator();

const DrawerCarrinho = () => {
    return (
        <Drawer.Navigator >
            <Drawer.Screen name='Home' component={TabNavigator} />
            <Drawer.Screen name='Cadastro' component={Cadastro} />
            <Drawer.Screen name='Checkout' component={Checkout} />
        </Drawer.Navigator>
    )
}
export default DrawerCarrinho;