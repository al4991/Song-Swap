import React from 'react'; 
import { StyleSheet, View, Text } from 'react-native'; 


const styles = { 
    historyContainer: { 
        display: "flex", 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignContent: 'center',
        backgroundColor: '#8088F6',
        height: "100%", 
    }, 
    itemContainer: { 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "flex-start", 
        justifyContent: "flex-start", 
        backgroundColor: '#A6BAF9',
        padding: 5,
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        overflow: "auto",
        marginLeft: 40, 
        marginRight: 40,
        marginTop: 10, 
    }, 
    greenBorder: {
        borderColor: "#7BEF8A",
    }, 
    redBorder: { 
        borderColor: "#F2548E",
    }, 
    itemText: { 
        height: 20
    }, 
    dateWrapper: { 
        fontSize: 10, 
        opacity: 0.5 
    }, 
}


export default function History(props) { 
    
    return (
        <View style={styles.historyContainer}>  
            {props.navigation.state.params['history'].slice(0).reverse().map(
                (elem) => {
                    let border = elem.complete ? styles.greenBorder : styles.redBorder; 
                    return (
                        <View style={{...styles.itemContainer, ...border}}> 
                            <Text style={styles.itemText}>
                                {elem["value"]}
                            </Text>
                            <Text style={styles.dateWrapper}> 
                                {elem["date"]}
                            </Text>
                        </View>
                    )
                }
                   
            )}
        </View>
    );
}

History.navigationOptions = {
    title: "History",
    headerStyle: {
        backgroundColor: '#5A65FB',
    },
    headerTintColor: 'white', 
    headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white'
    },
}