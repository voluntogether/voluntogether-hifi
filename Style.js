import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    greenButton: {
        backgroundColor: "#9DB865",
        borderRadius: 12,
        minWidth: "75%",
    },
    regularYellowButton: {
        backgroundColor: "#F6CA44",
        borderRadius: 12,
        minWidth: "75%",
        color: "#10123D"
    },
    smallGreenButton: {
        backgroundColor: "#9DB865",
        borderRadius: 12,
        maxWidth: "40%",
        justifyContent: 'center'
    },
     yellowButton: {
        backgroundColor: "#F6CA44",
        minWidth: 54,
        width: 54,
        maxWidth: 54,
        minHeight: 54,
        height: 54,
        maxHeight: 54,
        borderRadius: 108,
        padding: 0,
        boxSizing: "border-box"
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
    yellowCard: {
        backgroundColor: "#FFCE00",
        width: 330,
        paddingTop: 25,
        marginBottom: 60,
        //justifyContent: "flex-end",
        justifyContent: "center",
        flexDirection: "row"
        //alignItems: "flex-end"
    },
    resizeableBlueCard: {
        backgroundColor: "#A4C1E3",
        minHeight: 200,
        width: 330,
        paddingTop: 25,
        marginBottom: 60,
    },
    blueCardJournal: {
        backgroundColor: "#A4C1E3",
        height: 200,
        width: 150,
        paddingTop: 25,
        marginBottom: 60,
    },
    greyCardChallenge: {
        backgroundColor: "#E4E4E4",
        backgroundColor: "red",
        //paddingTop: 200
        //height: 600,
        //width: "screenX",
        //width: "windowWidth"

    },
    nonButtonTag: {
        backgroundColor: "#f4f4f4",
        borderStyle: "solid",
        borderWidth: 1,
        borderRadius: 15,
        borderColor: "#10123D",
        padding: 5,
        marginBottom: 20,
    },
    avatarBox: {
        width: 62,
        height: 62,
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center"
    },
    spacer: {
        marginBottom: 20
    },
    invisibleBackgroundButton: {
        backgroundColor: "transparent",
        border: "none",
        visibility: "none",
        borderRadius: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        marginBottom: 0,
        margin: 0,
        height: "auto",
        marginTop: 0,
        maxHeight: "100%",
        minHeight: 0
    },
    challengeImage: {
        height: 200,
        width: 322,
        paddingTop: 25,
        marginBottom: 10,
        borderRadius: 10,
        textAlign: "center",
        flexDirection: "row",
        justifyContent: "center",
    },
    challengeTitle: {
        marginTop: 5,
        marginBottom: 10
    },
    tagList: {
        flexDirection: "row",
        justifyContent: "flex-start",
    },
    challenge: {
        width: "100%",
    },
    width322: {
        width: 322
    }
});

export default Styles;
