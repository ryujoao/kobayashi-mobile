import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    header: {
        alignItems:"center"
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        padding: 16,
        
    },
    label: {
        padding: 16,
        fontSize: 16,
        fontWeight: "bold",
    },
    placeholder: {
        alignSelf: "center",
        paddingLeft: 16,
        height: 40,
        width: 370,
        borderWidth: 1,
        borderRadius: 10
    },
    botao: {
        display: "flex",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 30,
        backgroundColor: "#FFD700",
        width: 370,
        height: 45,
        borderRadius: 10 
    },

    botaoText: {  
        textAlign: "center",
    },
   
    criar: {
        paddingTop: 16,
        paddingLeft: 16,
    },
    
    criarText: {
        textDecorationLine: 'underline',
        textDecorationColor: "blue"
    }

})