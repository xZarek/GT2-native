import React from 'react';
import { Image, View } from 'react-native';
import { H1, Spinner } from 'native-base';
import defaultStyle from '../style';
import { users } from '../../service';


export default class LoadingScreen extends React.Component {
    static navigationOptions = () => ({
        header: null
    });

    async componentDidMount() {
        //const user = await users.getCurrentUser();
        this.props.navigation.navigate(false ? 'App' : 'Auth');
    }

    render() {
        const { container, logoImg, bgLightBlue } = defaultStyle;
        return (
            <View style={[container, bgLightBlue]}>
                <Image style={logoImg} source={require('../../assets/gt2.png')} />
                <Spinner color="#3C4BCB" />
            </View>
        );
    }
}
