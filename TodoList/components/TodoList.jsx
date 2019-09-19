import React from 'react'; 
import { Text, View, TextInput, Button } from 'react-native';

const styles = {   
    container : {
        display: "flex", 
        flexDirection: "column", 
        textAlign: "center", 
        justifyContent: "flex-start",
        alignItems: "center",
    },
    inputBox : {
        border: "black 2px solid", 
        width: "70%",
        textAlign: "center", 
        flex: 4
    }, 
    listItem: { 
        flex: 1
    },
    inputContainer: { 
        display: "flex", 
        flexDirection: "row"
    },
    inputButton: { 
        flex: 1,
    }
}

export default function TodoList() {
    const [value, onChangeText] = React.useState('fafa');
    const [list, onChangeList] = React.useState([]);
    const onPress = () => { 
        const items = [...list];
        items.push(value); 
        onChangeText(''); 
        onChangeList(items); 
        
    }
    
    return (
        <View style={styles.container}> 
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.inputBox}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                />
                <Button
                    style={styles.inputButton}
                    title="Add Item"
                    onPress={() => onPress()}
                /> 
            </View>
            { 
                list.map((elem) => <Text> {elem} </Text>)
            }
            <View styles={{flex: 1}}> 
                <Text styles={{flex: 1}}> yooyoo </Text>
            </View>
        </View>
    )
}