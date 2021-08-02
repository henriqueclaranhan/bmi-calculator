import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    resultContent: {
        flexDirection: "column",
        alignItems: "center",
        width: "85%",
    },
    resultMessage: {
        color: "#ff2950",
        textAlign: "center",
        fontSize: 23,
        fontFamily: "Poppins-Regular",
        textShadowRadius: 14,
        textShadowOffset: {width: 0, height: 2},
        textShadowColor: 'rgba(0, 0, 0, 0.2)',
    },
    result: {
        color: "#ff2950",
        fontSize: 45,
        fontFamily: "Poppins-Bold",
        marginTop: -10,
        textShadowRadius: 13,
        textShadowOffset: {width: 0, height: 2},
        textShadowColor: 'rgba(0, 0, 0, 0.25)',
    },
});

export default styles;