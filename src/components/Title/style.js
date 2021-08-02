import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    titleBackground: {
        position: "relative",
        paddingLeft: 30,
        height: 100,
        width: 232,
        borderBottomRightRadius: 20,
        backgroundColor: "#08244b",
        elevation: 6,
    },
    titleBox: {
        position: "absolute",
        bottom: 20,
        left: 30,
        flexDirection: "row",
        alignItems: "center",
        height: 24,
    },
    beforeTitle: {
        backgroundColor: "#ff2950",
        height: "100%",
        paddingRight: 3.3,
        marginRight: 4.3,
    },
    titleText: {
        color: "#fff",
        fontFamily: "Poppins-Medium",
        top: 2.5,
        fontSize: 23,
    },
});

export default styles;