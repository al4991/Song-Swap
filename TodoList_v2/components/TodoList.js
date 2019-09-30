import React from 'react'; 
import { FlatList , Text, View, TextInput, Button } from 'react-native';

import TodoItem from './TodoItem';


const styles = {  
    pageContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#8088F6',
        alignItems: 'stretch',
    }, 
    content: {
        flex: 1,
        display: "flex", 
        justifyContent: "flex-start", 
    },
    footer: { 
        display: 'flex', 
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: "#5A65FB",
        marginLeft: 30, 
        marginRight: 40,
        marginBottom: 20,
        borderRadius: 10, 
    },
    bodyText: { 
        textAlign: "center",
        fontSize: 30, 
        color: "white",
    },
    container : {
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "flex-start",
        alignItems: "stretch",
        height: 500
    },
    inputBox : {
        backgroundColor: "#A6BAF9", 
        borderColor: "#6C3CF2",
        borderWidth: 2,
        borderRadius: 10,
        textAlign: "center", 
        width: 310, 
        height: 50,
        marginLeft: 10,
        marginRight: 10,
    },
    listContainer: {
        flex: 1,
        height: 100
    },
    inputContainer: { 
        display: "flex", 
        flexDirection: "row", 
        alignItems: "center", 
        padding: 10,
        height: 75,
        justifyContent: "space-evenly",
    },
    inputButton: { 
        backgroundColor: "#6C3CF2",
        borderRadius: 10,
        padding: 3
    },
    parentContainer: { 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "flex-end",
        alignItems: "stretch"
    }
}

export default function TodoList(props) {
    
    const [value, onChangeText] = React.useState('');
    const [list, onChangeList] = React.useState([]);
    const [stack, onChangeStack] = React.useState([]);
    const onPress = () => { 
        const items = [...list];
        items.push(
            {
                "value": value, 
                "complete": false, 
                "date": (new Date()).toLocaleString("en-US")
            }
        ); 
        onChangeText(''); 
        onChangeList(items); 
    }

    const deleteItem = (ind) => { 
        onChangeList(([...list]).filter((a, i) => i !== ind));
        stack.push(list[ind]);
        onChangeStack(stack);
    }
    
    const toggleCompletion = (ind) => { 
        const items = [...list];
        items[ind]["complete"] = !items[ind]["complete"];
        onChangeList(items);
    }

    const undo = () => { 
        onChangeList( () => {
            let items = [...list, stack.pop()];
            onChangeStack(stack);
            return items;
        });
    }


    const toItemPage = (ind) => { 
        props.navigation.navigate('Item', {'delete': () => deleteItem(ind), 'complete': () => toggleCompletion(ind), item: list[ind]})
    }
    
    const toHistory = () => {
        props.navigation.navigate('History', {'history': stack})
    }
    return (

    <View style={styles.pageContainer}>
        <View style={styles.content}>
            <View style={styles.parentContainer}>
                <View style={styles.container}> 
                    <View style={styles.inputContainer}>
                        <TextInput 
                            style={styles.inputBox}
                            onChangeText={text => onChangeText(text)}
                            value={value}
                            placeholder="Add an Item"
                        />
                        <View style={styles.inputButton} >
                            <Button
                                color="white"
                                title="Add"
                                onPress={() => onPress()}
                                disabled={value === ''}
                            /> 
                        </View>
                    </View>
                
                    <FlatList style={styles.listContainer}
                        data={list}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={
                            ({item, index}) =>  
                                <TodoItem key={index} toItemPage = {() => toItemPage(index)} onPress={() => deleteItem(index)} item={item}/>
                        }
                    />
                </View>
            </View>
        </View>
      <View style={styles.footer}>
        <Button 
            color="white"

            title="Undo"
            onPress={() => undo()}
            disabled={stack.length === 0}
        />
        <Button 
            color="white"
            title="History"
            onPress={() => toHistory()}
        />
      </View>
    </View>   
)
}

TodoList.navigationOptions = {
    title: "To-do List",
    headerStyle: {
        backgroundColor: '#5A65FB',
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        color: 'white'
    },
}
