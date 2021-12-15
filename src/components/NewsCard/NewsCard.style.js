import { Dimensions,StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor: 'white',
        margin:15,
        borderRadius:10,
    },
    image:{
        height: Dimensions.get('window').height/4,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    title:{
        fontWeight:'bold',
        fontSize:19,
    },
    description:{
        marginTop:3,
        fontWeight:'semi-bold',
        fontSize:16,
    },
    author:{
        fontStyle:'italic',
        textAlign:'right',
    },
    inner_container:{
        margin:10,
    },
})