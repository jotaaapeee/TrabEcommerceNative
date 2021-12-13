import { Text, View, Image, TouchableOpacity } from 'react-native';
import { buscarPorNome } from '../../data/Produto/produto_db';
import React, { useState } from 'react';
import styles from './styles';

const Header = ({ navigation }) => {
    const [nome, setNome] = useState(null);
    const [produto, setProduto] = useState([]);
    const buscarProduto = () => {
        let produto = buscarPorNome(nome);
        setProduto(produto);
    }
    return (
        <View style={styles.header}>
            <Image
                source={require('../../assets/quad.png')}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    )
}
export default Header;

