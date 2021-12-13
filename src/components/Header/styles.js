import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#343A40',
        flexDirection: 'row',
        padding: 8,
        justifyContent: 'center',
        paddingRight:20
    },
    button: {
        alignItems: "center",
        backgroundColor: "pink",
        height:20,
        width:80,
        marginLeft:40,
        borderRadius: 15
      },
    image: {
        marginLeft: 15,
        justifyContent: 'center',
        width: 30, 
        height: 30 
    }
});
export default styles;