import { COLORS, FONT_SIZE } from "../../constants/theme"

export const styles = {
    container: {
        flex: 1,
        padding: 40,
        justifyContent: "center",
        alignItems: "center"
    },
    form: {
        width: "100%",
        marginBottom: 15
    },
    formHorizontal: {
        flexDirection: "row"
    },
    scrolView: {
        width: "100%"
    },
    formGroup: {
        width: "100%",
        marginTop: 25,
        marginBottom: 40
    },
    footer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
        marginBottom: 25
    },
    footerText: {
        textAlign: "center",
        color: COLORS.dark_gray,
        fontSize: FONT_SIZE.md
    },
    form70:{
        width: "70%",
        marginBottom: 15,
        paddingRight: 10
    },
    form30:{
        width: "30%",
        marginBottom: 15
    }

}