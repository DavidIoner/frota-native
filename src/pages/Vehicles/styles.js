import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    boxTitle: {
        alignItems: "center",
        justifyContent: "center",
        padding:10,
    },
    boxList: {
        flex: 1,
        backgroundColor: '#242425',
    },
    boxListItem: {
        paddingTop: 15,
        paddingBottom: 15,
        marginLeft: 30,
        marginRight: 30,
        borderBottomWidth: 1,
        borderBottomColor: '#444',
    },
    textItem: {
        fontSize: 22,
        color: 'white'
    },
    textSubItem: {
        fontSize: 16,
        color: 'white'
    },
    boxSearch: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    search: {
        flex: 1,
        height: 50,
        backgroundColor: '#363636',
        margin: 30,
        borderRadius: 5,
        fontSize: 19,
        paddingLeft: 15,
        paddingRight: 15,
        color: '#FFFFFF',
    }
})

export default styles