import React, { Component } from "react";
import {
    KeyboardAvoidingView,
    TextInput,
    View,
    Image,
    TouchableWithoutFeedback,
    ScrollView
} from "react-native";
import PropTypes from "prop-types";
import { Button, H1, Text, Toast, Icon } from "native-base";
import defaultStyle from "../style";

export default class MenuBar extends React.Component {
    touchLink = item => {
        this.props.navigator.navigate(item.screen);
        this.props.closeDrawer();
    };
    renderMenu() {
        const { menuBarContainer } = defaultStyle;
        let menuArray = [
            {
                id: 1,
                screen: "Home",
                title: "Dashboard",
                icon: "md-book"
            },
            {
                id: 2,
                screen: "Subj",
                title: "Subject",
                icon: "md-contact"
            }
        ];
        return menuArray.map(item => {
            return (
                <TouchableWithoutFeedback
                    onPress={() => this.touchLink(item)}
                    key={item.id}
                >
                    <View style={[menuBarContainer]}>
                        <Icon name={item.icon} style={{ marginRight: 20 }} />
                        <Text>{item.title}</Text>
                    </View>
                </TouchableWithoutFeedback>
            );
        });
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#FFFFFF" }}>
                <ScrollView>{this.renderMenu()}</ScrollView>
            </View>
        );
    }
}
