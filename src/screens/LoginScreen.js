import React, { Component } from 'react';
import { KeyboardAvoidingView, TextInput, View, Image } from 'react-native';
import PropTypes from 'prop-types';
import { Button, H1, Spinner, Text, Toast } from 'native-base';
import defaultStyle from '../style';



export default class LoginScreen extends React.Component {
    static navigationOptions = () => ({
        header: null
    });

    state = {
        loading: false,
        userName: '',
        password: ''
      };

    async componentDidMount() {

    }

    login = () => { 
        this.props.navigation.navigate('App');  
    }

    render() {
        const { loginForm, container, logoImg, bgLightBlue, bgPrimary } = defaultStyle;
        return (
            <View style={[container, bgLightBlue]}>
                <KeyboardAvoidingView
                        behavior="padding"
                        style={[defaultStyle.container, defaultStyle.bgLightBlue, { paddingHorizontal: 40 }]}>

                    <Image style={logoImg} source={require('../../assets/gt2.png')} />
                    <View style={[loginForm, bgPrimary]}>

                        <TextInput
                            style={defaultStyle.textInput}
                            placeholder="Jméno"
                            autoCapitalize="none"
                            onChangeText={userName => this.setState({ userName })}
                            underlineColorAndroid="transparent"
                        />
                        <TextInput
                            style={defaultStyle.textInput}
                            placeholder="Heslo"
                            secureTextEntry
                            autoCapitalize="none"
                            onChangeText={password => this.setState({ password })}
                            underlineColorAndroid="transparent"
                        />

                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    marginTop: 20,
                                    marginBottom: 10
                                }}>
                                <Button primary style={{ justifyContent: 'center', flex: 1 }} onPress={this.login}>

                                        <Text style={defaultStyle.centerText}>Přihlásit</Text>

                                </Button>
                            </View>
                        </View>
                </KeyboardAvoidingView>
            

            </View>
        );
    }
}
