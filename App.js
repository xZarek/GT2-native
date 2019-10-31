import React from "react";
import PropTypes from "prop-types";
import { createAppContainer } from "react-navigation";
import * as Font from "expo-font";
import { Root, StyleProvider } from "native-base";
import { Text } from "react-native";
import { createRootNavigator } from "./router";
import getTheme from "./native-base-theme/components";
import custom from "./native-base-theme/variables/commonColor";
import LoadingScreen from "./src/screens/LoadingScreen";
console.disableYellowBox = true;

export default class App extends React.Component {
    state = {
        loading: false
    };

    async componentDidMount() {
        await Font.loadAsync({
            Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf")
        });
        this.setState({ loading: true });
    }

    render() {
        const Layout = createRootNavigator();
        const AppContainer = createAppContainer(Layout);

        return (
            <Root>
                {this.state.loading ? (
                    <StyleProvider style={getTheme(custom)}>
                        <AppContainer />
                    </StyleProvider>
                ) : (
                    <LoadingScreen />
                )}
            </Root>
        );
    }
}

App.defaultProps = {
    navigation: null
};

App.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func.isRequired
    })
};
