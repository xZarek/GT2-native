import React from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
    Picker
} from "react-native";
import Menu, { MenuItem, MenuDivider } from "react-native-material-menu";
import {
    Table,
    TableWrapper,
    Row,
    Rows,
    Col,
    Cols,
    Cell
} from "react-native-table-component";
import defaultStyle from "../style";
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
import { H3 } from "native-base";
import { Drawer } from "native-base";
import MenuBar from "../components/MenuBar.js";

export default class Subject extends React.Component {
    constructor(props) {
        super(props);
        const elementSelect = value => (
            <Picker
                selectedValue={value}
                style={styles2.picker}
                onValueChange={(itemValue, itemIndex) =>
                    this.setState({ header1: itemValue })
                }
            >
                <Picker.Item label="Jménoaa" value="name" />
                <Picker.Item label="Kontakty" value="contacts" />
                <Picker.Item label="Adresa" value="adrress" />
                <Picker.Item label="Typ" value="type" />
                <Picker.Item label="Aktivní" value="active" />
            </Picker>
        );
        this.state = {
            tableHead2: ["Head1", "Head2", "Head3"],
            tableData2: [
                ["1", "2", "3"],
                ["a", "b", "c"],
                ["1", "2", "3"],
                ["a", "b", "c"]
            ],
            header1: "Id",
            tableHead: ["Id", "Jméno", "Kontakty", "Adresa", "Typ", "Aktivní"],
            tableData: [
                [
                    1,
                    "Jarda Lámal",
                    "737766852",
                    "Vršovice 182, Praha 2",
                    "PO",
                    "Ano"
                ],
                [
                    2,
                    "Zdeněk Kryt",
                    "737766854",
                    "Pražská 55, Znojmo",
                    "PO",
                    "Ano"
                ],
                [
                    3,
                    "Lukáš Jenda",
                    "737766859",
                    "Znojmeská 14, Třebíč",
                    "FO",
                    "Ano"
                ],
                [4, "Lenka Králová", "737766857", "Vracovice 119", "FPO", "Ne"]
            ],
            widthArr: [40, 60, 80, 100, 120, 140, 160, 180, 200],
            tableData1: [
                [elementSelect("name"), "a", "b", "c", "d"],
                [elementSelect("type"), "1", "2", "3", "4"],
                [elementSelect("contacts"), "pol", "lop", "lll", "dpp"]
            ],
            openDrawer: false
        };
    }

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
                            <H3> Subject </H3>
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
                    <View style={styles2.container}>
                        <Table
                            style={styles2.table}
                            borderStyle={{ borderWidth: 1 }}
                        >
                            <TableWrapper style={{ flex: 1 }}>
                                <Cols
                                    data={this.state.tableData1}
                                    heightArr={[40, 30, 30, 30, 30]}
                                    textStyle={styles2.text}
                                />
                            </TableWrapper>
                        </Table>
                    </View>

                    <View style={styles.container}>
                        <Table borderStyle={{ borderWidth: 0 }}>
                            <Row
                                data={this.state.tableHead2}
                                flexArr={[1, 2, 1, 1]}
                                style={styles.head}
                                textStyle={styles.text}
                            />
                            <TableWrapper style={styles.wrapper}>
                                <Cell
                                    data={"pokl"}
                                    style={styles.title}
                                    heightArr={[28, 28]}
                                    textStyle={styles.text}
                                />
                                <Cell
                                    data={"pokl2"}
                                    style={styles.title}
                                    heightArr={[28, 28]}
                                    textStyle={styles.text}
                                />
                                <Cell
                                    data={"pokl3"}
                                    style={styles.title}
                                    heightArr={[28, 28]}
                                    textStyle={styles.text}
                                />
                            </TableWrapper>

                            <TableWrapper style={styles.wrapper}>
                                <Cell
                                    data={"po9"}
                                    style={styles.title}
                                    heightArr={[28, 28]}
                                    textStyle={styles.text}
                                />
                                <Cell
                                    data={"po89"}
                                    style={styles.title}
                                    heightArr={[28, 28]}
                                    textStyle={styles.text}
                                />
                                <Cell
                                    data={"po65"}
                                    style={styles.title}
                                    heightArr={[28, 28]}
                                    textStyle={styles.text}
                                />
                            </TableWrapper>
                        </Table>
                    </View>
                </Drawer>
            </Container>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: "#fff"
    },
    head: { height: 40, backgroundColor: "#f1f8ff" },
    wrapper: { flexDirection: "row" },
    title: { flex: 1, backgroundColor: "#f6f8fa" },
    row: {
        height: 28,
        backgroundColor: "#ffb3b3",
        borderRadius: 5,
        marginBottom: 10
    },
    text: { textAlign: "center" }
});

const styles2 = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        paddingTop: 30,
        backgroundColor: "#ff0000"
    },
    row: { height: 40, backgroundColor: "#E7E6E1" },
    table: {
        flexDirection: "row",
        backgroundColor: "#33cc33",
        alignItems: "center"
    },
    singleHead: { width: 80, height: 40, backgroundColor: "#c8e1ff" },
    head: { flex: 1, backgroundColor: "#c8e1ff" },
    title: { flex: 2, backgroundColor: "#f6f8fa" },
    titleText: { marginRight: 6, textAlign: "right" },
    text: {
        textAlign: "center"
    },
    picker: {
        backgroundColor: "#ffb3b3"
    },
    btn: {
        width: 58,
        height: 18,
        marginLeft: 15,
        backgroundColor: "#c8e1ff",
        borderRadius: 2
    },
    btnText: { textAlign: "center" }
});
