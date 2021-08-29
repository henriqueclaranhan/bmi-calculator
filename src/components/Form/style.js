import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    content: {
        position: "relative",
        width: "100%",
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    form: {
        width: "85%",
        height: "auto",
    },
    formLabel: {
        color: "#08244b",
        marginTop: 10,
        marginLeft: 7,
        fontFamily: "Poppins-Medium",
        fontSize: 19,
        textShadowRadius: 2,
    },
    labelHint: {
        marginTop: -10,
        color: "#08244b",
        marginLeft: 7,
        fontFamily: "Poppins-Regular",
        fontSize: 15,
    },
    formInput: {
        width: "100%",
        height: 43,
        borderRadius: 6,
        borderStyle: "solid",
        borderWidth: 3,
        paddingHorizontal: 12,
        paddingTop: 2,
        borderColor: "#08244b",
        backgroundColor: "#f6f6f6",
        fontFamily: "Poppins-Regular",
        elevation: 6,
    },
    calculateButton: {
        elevation: 6,
        marginTop: 50,
        marginBottom: 45,
        paddingTop: 4,
        paddingBottom: 2,
        paddingHorizontal: 40,
        borderRadius: 3,
        backgroundColor: "#ff2950",
        flexDirection: "row",
        alignItems: "center",
    },
    calculateButtonText: {
        fontSize: 20,
        color: "#fff",
        marginTop: 2,
        fontFamily: "Poppins-Medium",
    }
});

export default styles;
