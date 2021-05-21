import { StyleSheet } from "react-native";



export const styles = StyleSheet.create({
    
    globalStyle:{
        marginHorizontal:20
    },
    title:{
        fontSize:30,
        marginBottom:10
    },
    botonGrande:{
        width:100,
        height:100,
        backgroundColor:'red',
        borderRadius:20,
        justifyContent:"center",
        alignItems:"center",
        marginRight:10
    },
    botonGrandeTexto:{
        color:'white',
        fontSize:18,
        fontWeight:'bold',
    },
    avatarContainer:{
        marginTop:20,
        alignItems:"center",    
    },
    avatar:{
        width:150,
        height:150,
        borderRadius:100
    },

    menuContainer:{
        marginVertical:20,
        marginHorizontal:50
    },
    menuBtn:{
        marginTop:15
    },
    textoMenu:{
        fontSize:18
    }

});