import { Platform, StyleSheet, StatusBar } from 'react-native';
import { inheritLeadingComments } from '@babel/types';
const inputStyles = {
    height: 45,
    alignSelf: 'stretch',
    marginBottom: 20,
    paddingVertical: 6,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
};

// Helpers
const commonStyle = StyleSheet.create({
    // layout
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    menuContainer: {
        flex: 1,
    },

    headerTab: {
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight
            }
        }),
    },
    menuBarContainer: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        paddingHorizontal: 30,
        paddingTop: 20,
    },

    menuBarItem: {

    },

    //menu
    menuTab: {
        width: 90,
        height: 70,
        backgroundColor: '#17BF7B',
        alignItems: 'center',
        justifyContent: 'center'
    },

    //loginForm
    loginForm: {
        marginTop: 10,
        height: 310,
        width: 300,
        paddingHorizontal: 25,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    // img
    logoImg: {
        height: 85,
        width: 300,
        borderRadius: 10
    },
    // fields
    textInput: {
        ...inputStyles,
        paddingHorizontal: Platform.OS === 'ios' ? 16 : 8,
        fontSize: 16
    },
    // bg
    bgPrimary: {
        backgroundColor: '#17A8BF'
    },
    bgSecondary: {
        backgroundColor: '#17BF7B'
    },
    bgLightBlue: {
        backgroundColor: '#E0EBFA'
    },
    bgLightGreen: {
        backgroundColor: '#0EE193'
    },
    // color
    primaryColor: {
        color: '#ff2d21'
    },
    gray: {
        color: '#808080'
    },
    blue: {
        color: '#007aff'
    }
});

export default commonStyle;
