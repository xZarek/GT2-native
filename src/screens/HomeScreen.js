import React from "react";
import { View, Text, Dimensions, ScrollView, Alert } from "react-native";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import defaultStyle from "../style";
import { Drawer } from "native-base";
import {
    Body,
    Button,
    Container,
    Header,
    Icon,
    Left,
    Right,
    Title
} from "native-base";
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
} from "react-native-chart-kit";
import { H3 } from "native-base";
import MenuBar from "../components/MenuBar.js";

export default class LoadingScreen extends React.Component {
    state = {
        openDrawer: false
    };
    closeDrawer = () => {
        this.drawer && this.drawer._root.close();
    };

    openDrawer = () => {
        this.drawer._root.open();
    };

    toogleMenu = () => {
        this.drawer._root._open ? this.closeDrawer() : this.openDrawer();
    };
    render() {
        const {
            menuTab,
            container,
            bgLightGreen,
            headerTab,
            bgPrimary
        } = defaultStyle;
        return (
            <Container>
                <Header style={[bgPrimary, headerTab]} hasSegment>
                    <Left />
                    <Body>
                        <Title
                            style={{
                                textTransform: "uppercase"
                            }}
                        >
                            <H3> Dashboard </H3>
                        </Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.toogleMenu()}>
                            <Icon name="md-menu" style={{ color: "#000" }} />
                        </Button>
                    </Right>
                </Header>
                <Drawer
                    ref={ref => {
                        this.drawer = ref;
                    }}
                    content={
                        <MenuBar
                            navigator={this.props.navigation}
                            closeDrawer={this.closeDrawer}
                        />
                    }
                    openDrawerOffset={0.3}
                    panCloseMask={0.3}
                >
                    <View
                        style={{
                            paddingTop: 20,
                            flex: 1
                        }}
                    >
                        <ScrollView>
                            <Text
                                style={{
                                    alignSelf: "center",
                                    fontSize: 19
                                }}
                            >
                                Tarif
                            </Text>
                            <LineChart
                                data={{
                                    labels: [
                                        "January",
                                        "February",
                                        "March",
                                        "April",
                                        "May",
                                        "June"
                                    ],
                                    datasets: [
                                        {
                                            data: [
                                                Math.random() * 100,
                                                Math.random() * 100,
                                                Math.random() * 100,
                                                Math.random() * 100,
                                                Math.random() * 100,
                                                Math.random() * 100
                                            ]
                                        }
                                    ]
                                }}
                                width={Dimensions.get("window").width - 20} // from react-native
                                height={220}
                                yAxisLabel={"$"}
                                chartConfig={{
                                    backgroundColor: "#e26a00",
                                    backgroundGradientFrom: "#fb8c00",
                                    backgroundGradientTo: "#ffa726",
                                    decimalPlaces: 2, // optional, defaults to 2dp
                                    color: (opacity = 1) =>
                                        `rgba(255, 255, 255, ${opacity})`,
                                    labelColor: (opacity = 1) =>
                                        `rgba(255, 255, 255, ${opacity})`,
                                    style: {
                                        borderRadius: 16
                                    },
                                    propsForDots: {
                                        r: "6",
                                        strokeWidth: "2",
                                        stroke: "#ffa726"
                                    }
                                }}
                                bezier
                                style={{
                                    marginVertical: 8,
                                    borderRadius: 16,
                                    alignItems: "center"
                                }}
                            />

                            <Text
                                style={{
                                    alignSelf: "center",
                                    fontSize: 19,
                                    paddingTop: 12
                                }}
                            >
                                Výdaje
                            </Text>
                            <LineChart
                                data={{
                                    labels: [
                                        "January",
                                        "February",
                                        "March",
                                        "April",
                                        "May",
                                        "June"
                                    ],
                                    datasets: [
                                        {
                                            data: [20, 45, 28, 80, 99, 43],
                                            color: (opacity = 1) =>
                                                `rgba(188, 8, 32, ${opacity})`, // optional
                                            strokeWidth: 2 // optional
                                        }
                                    ]
                                }}
                                width={Dimensions.get("window").width - 20}
                                height={200}
                                chartConfig={{
                                    backgroundGradientFrom: "#BCB608",
                                    backgroundGradientFromOpacity: 0,
                                    backgroundGradientTo: "#26BC08",
                                    backgroundGradientToOpacity: 0.5,
                                    color: (opacity = 1) =>
                                        `rgba(1, 1, 1, ${opacity})`,
                                    strokeWidth: 2, // optional, default 3
                                    barPercentage: 0.5
                                }}
                                style={{
                                    marginVertical: 8,
                                    borderRadius: 16,
                                    alignItems: "center"
                                }}
                            />
                            <Text
                                style={{
                                    alignSelf: "center",
                                    fontSize: 19,
                                    paddingTop: 12
                                }}
                            >
                                Population
                            </Text>
                            <PieChart
                                data={[
                                    {
                                        name: "Seoul",
                                        population: 21500000,
                                        color: "rgba(131, 167, 234, 1)",
                                        legendFontColor: "#7F7F7F",
                                        legendFontSize: 15
                                    },
                                    {
                                        name: "Toronto",
                                        population: 2800000,
                                        color: "#F00",
                                        legendFontColor: "#7F7F7F",
                                        legendFontSize: 15
                                    },
                                    {
                                        name: "Beijing",
                                        population: 527612,
                                        color: "red",
                                        legendFontColor: "#7F7F7F",
                                        legendFontSize: 15
                                    },
                                    {
                                        name: "New York",
                                        population: 8538000,
                                        color: "#46CE2B",
                                        legendFontColor: "#7F7F7F",
                                        legendFontSize: 15
                                    },
                                    {
                                        name: "Moscow",
                                        population: 11920000,
                                        color: "rgb(0, 0, 255)",
                                        legendFontColor: "#7F7F7F",
                                        legendFontSize: 15
                                    }
                                ]}
                                width={Dimensions.get("window").width - 20}
                                height={200}
                                chartConfig={{
                                    backgroundGradientFrom: "#BCB608",
                                    backgroundGradientFromOpacity: 0,
                                    backgroundGradientTo: "#26BC08",
                                    backgroundGradientToOpacity: 0.5,
                                    color: (opacity = 1) =>
                                        `rgba(1, 1, 1, ${opacity})`,
                                    strokeWidth: 2, // optional, default 3
                                    barPercentage: 0.5
                                }}
                                style={{
                                    marginVertical: 8,
                                    borderRadius: 16,
                                    alignItems: "center"
                                }}
                                accessor="population"
                                backgroundColor="transparent"
                                paddingLeft="15"
                                absolute
                            />
                        </ScrollView>
                    </View>
                </Drawer>
            </Container>
        );
    }
}
