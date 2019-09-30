import React from 'react'; 
import { Button, View, Text } from 'react-native'; 

const styles = {
    container: { 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'flex-start', 
        alignItems: 'center',
        backgroundColor: '#8088F6',
        height: "100%", 

    },
    itemContainer: {
        height: "auto", 
        width: 300,
        borderWidth: "2px", 
        borderRadius: 10, 
        backgroundColor: '#A6BAF9',
        marginTop: 100,
        padding: 20
        
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
    textWrapper: {
        fontSize: 50, 
    },
    buttonWrapper: { 
        backgroundColor: "#5A65FB",
        marginLeft: 30, 
        marginRight: 40,
        marginBottom: 20,
        borderRadius: 10, 
    }
}



export default function ItemPage(props) { 
    const item = props.navigation.getParam("item");
    const [beep, setBeep] = React.useState(item["complete"]); 
    let border =item['complete'] ? styles.greenBorder : styles.redBorder;
    return (
        <View style={styles.container}> 
            <View style={{...styles.itemContainer, ...border }}> 
                <Text style={styles.textWrapper}>
                    {item['value'] }
                </Text>
                <Text style={styles.dateWrapper}> 
                    {item["date"]}
                </Text>     
            </View>
            <View style={styles.buttonWrapper}> 
                <Button
                    color="white"
                    title="Toggle Completion"
                    onPress={() => {
                        props.navigation.state.params['complete']();
                        setBeep(!beep)
                    }}
                />    
            </View>
        </View>
    );
}
ItemPage.navigationOptions = {
    title: "Item Details",
    headerStyle: {
        backgroundColor: '#5A65FB',
    },
    headerTintColor: 'white',
    headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white'
    },
}