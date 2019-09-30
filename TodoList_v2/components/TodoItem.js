import React from 'react'; 
import { View, Text } from 'react-native'; 
import Swipeout from 'react-native-swipeout';

const styles = { 
    textContainer: { 
        display: "flex", 
        flexDirection: "column", 
        alignItems: "flex-start", 
        justifyContent: "flex-start", 
        backgroundColor: '#A6BAF9',
        padding: 5,
        height: 50,
        borderWidth: 2,
        borderRadius: 10,
        overflow: "auto"
    }, 
    rowContainer: {
        marginLeft: 40,
        marginRight: 40,
        height: 50,
    }, 
    itemText: { 
        height: 20
    },
    buttonWrapper: { 
        height: 50,
        flex: 1,
        marginLeft: 1
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
    }, 
    swipeoutStyle: {
        height: 50, 
        marginBottom: 10
    }
}


export default function TodoItem(props) { 
    const borderColor = props.item["complete"] ? styles.greenBorder : styles.redBorder;
    
    let swipeDelete = [{
        text: 'Delete', 
        backgroundColor: '#F2548E',
        onPress: () => {props.onPress()}
    }];

    return (      
        <Swipeout style={styles.swipeoutStyle}right={swipeDelete} autoClose={true} close={true} backgroundColor='transparent'>
            <View style={styles.rowContainer}> 
                <View style={{...styles.textContainer, ...borderColor}} onTouchEnd={() => {props.toItemPage()}}> 
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