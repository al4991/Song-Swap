import React from 'react'; 
import { Button, View, Text } from 'react-native'; 
import Swipeout from 'react-native-swipeout';

const styles = { 
    textContainer: { 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "flex-start", 
        justifyContent: "flex-start", 
        backgroundColor: '#A6BAF9',
        padding: "5%",
        height: "auto",
        borderWidth: "2px",
        borderRadius: 10,
        overflow: "auto"

    }, 
    rowContainer: {
        marginLeft: "10%",
        marginRight: "10%",
        height: "auto",
        marginTop: "1%", 
        marginBottom: "1%", 
    }, 
    itemText: { 
    },
    buttonWrapper: { 
        height: "auto",
        flex: 1,
        marginLeft: "2%"
    },
    greenBorder: {
        borderColor: "#7BEF8A",
    }, 
    redBorder: { 
        borderColor: "#F2548E",
    }, 
    dateWrapper: { 
        fontSize: 10, 
        opacity: 0.5 
    }
}


export default function ListItem(props) { 
    const borderColor = props.item["complete"] ? styles.greenBorder : styles.redBorder;
    
    let swipeDelete = [{
        text: 'Delete', 
        backgroundColor: '#F2548E',
        onPress: () => {props.onPress()}
    }];
    return (      
        <Swipeout style={{height: 100}}right={swipeDelete} autoClose={true} close={true} backgroundColor='transparent'>
            <View style={styles.rowContainer}> 
                <View style={{...styles.textContainer, ...borderColor}} onTouchEnd={() => {props.toggleComplete()}}> 
                    <Text style={styles.itemText}>
                    {props.item["value"]}
                    </Text>
                    <Text style={styles.dateWrapper}> 
                    {props.item["date"]}
                    </Text>
                </View>
            </View>
        </Swipeout>
    )
}