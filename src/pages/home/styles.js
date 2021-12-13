import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: 'lightgray',
        margin: 10,
    },
    titulo: {
        fontSize: 20,
        textAlign: 'center',
        color: 'white',

    },
    tituloContainer: {
        marginTop: 10,
        backgroundColor: '#343A40',
        width: 180,
        alignSelf: 'center',
        borderRadius: 7,
        height: 30
    },
    categoriaName: {
        fontSize: 20,
        paddingLeft: 10,
        paddingTop: 10
    },
    imageProduto: {
        height: 130,
        width: 130,
        alignSelf: 'center',
        margin: 5
    },
    viewContainerCard: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#343A40',
        margin: 10,
        width: 150,
        height: 200,
        borderRadius: 10
    },
    textoCard: {
        color: '#fff',
        paddingLeft: 15,
        paddingTop: 3
    },
    superContainer: {
        height: '98%',
    }
})
export default styles;