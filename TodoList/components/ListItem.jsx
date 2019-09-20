import React from 'react'; 
import { Button, View, Text } from 'react-native'; 

const styles = { 
    container: { 
        flex: 1,
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "flex-end",
        alignItems: 'center',
        backgroundColor: '#A6BAF9',
        marginTop: "1%", 
        marginBottom: "1%",
        marginLeft: "15%",
        marginRight: "15%",
        height: "auto",
        paddingLeft: "3%", 
        paddingRight: "3%",
        borderWidth: "2px",
        borderRadius: 10,
    },
    itemText: { 
        margin: "3%" , 
        flex: 4,
    },
    buttonWrapper: { 
        height: "auto",
        flex: 1,
        margin: "3%"
    },
    greenBorder: {
        borderColor: "#7BEF8A",
    }, 
    redBorder: { 
        borderColor: "#F2548E",
    }
}

export default function ListItem(props) { 
    const [completed, onChangeComplete] = React.useState(false); 
    const borderColor = completed ? styles.greenBorder : styles.redBorder;
    return ( 
        <View style={{...styles.container, ...borderColor}}> 
            <Text style={styles.itemText}>
            {props.item}
            </Text>
            <View style={styles.buttonWrapper}> 
                <Button
                    title="-"
                    onPress={() => props.onPress()}
                /> 
            </View>
            <View style={styles.buttonWrapper}> 
                <Button 
                    title="✓"
                    onPress={(e) => {
                        onChangeComplete(!completed)
                        e.target.title = "X"
                    }
                    }
                />
            </View>
        </View>
    )
}