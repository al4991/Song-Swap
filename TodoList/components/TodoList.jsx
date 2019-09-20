import React from 'react'; 
import { Text, View, TextInput, Button } from 'react-native';

import ListItem from './ListItem'
const styles = {   
    container : {
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "flex-start",
        alignItems: "stretch",

    },
    inputBox : {
        backgroundColor: "#A6BAF9", 
        borderColor: "#6C3CF2",
        borderWidth: "2px",
        borderRadius: 10,
        textAlign: "center", 
        flex: 3, 
        marginRight: "5%",
    }, 
    listItem: { 
        flex: 1
    },
    inputContainer: { 
        display: "flex", 
        flexDirection: "row", 
        alignItems: "stretch", 
        padding: "1%",
        justifyContent: "space-evenly",
        marginTop: "5%", 
        marginBottom: "5%",
        marginLeft: "10%", 
        marginRight: "10%",
    },
    inputButton: { 
        flex: 1,
    }
}

export default function TodoList() {
    const [value, onChangeText] = React.useState('');
    const [list, onChangeList] = React.useState(['beep', 'beep', 'lechuga']);
    const onPress = () => { 
        const items = [...list];
        items.push(value); 
        onChangeText(''); 
        onChangeList(items); 
        
    }
    const deleteItem = (elem) => { 
        onChangeList(([...list]).filter((ele, i) => i !== elem));
    }
    
    return (
        <View style={styles.container}> 
            <View style={styles.inputContainer}>
                <TextInput 
                    style={styles.inputBox}
                    onChangeText={text => onChangeText(text)}
                    value={value}
                    placeholder="Add an Item"
                />
                <Button
                    style={styles.inputButton}
                    color="#A938F4"
                    title="Add"
                    onPress={() => onPress()}
                    disabled={value === ''}
                /> 
            </View>
            { 
                list.map((elem, ind) => <ListItem key={ind} onPress={() => deleteItem(ind)} item={elem}/>)
            }
            
        </View>
    )
}