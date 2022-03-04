import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    greenButton: {
        backgroundColor: "#9DB865",
        borderRadius: 12,
        minWidth: "75%",
    }, yellowButton: {
        backgroundColor: "#F6CA44",
        minWidth: 54,
        width: 54,
        maxWidth: 54,
        minHeight: 54,
        height: 54,
        maxHeight: 54,
        borderRadius: 108,
    }, boxShadow: {
        shadowColor: '#10123D',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 2
    },
    blueCard: {
        backgroundColor: "#A4C1E3",
        height: 200,
        width: 330,
        paddingTop: 25,  
        marginBottom: 60, 
    },
    nonButtonTag: {
        backgroundColor: "#f4f4f4",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#10123D",
        padding: 5,
        marginBottom: 20, 
    }
});

export default Styles;
