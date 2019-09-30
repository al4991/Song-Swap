import React from 'react'; 
import { ScrollView, FlatList , Text, View, TextInput, Button } from 'react-native';


import ListItem from './ListItem';
import Stack from './stack';


const styles = {  
    
    pageContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#8088F6',
        alignItems: 'stretch',
    }, 
    header: {
        height: "10%",
        backgroundColor: "#5A65FB",
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "center",
    }, 
    headerText: { 
        textAlign: "center",
        fontSize: 40, 
        color: "white",
    }, 
    content: {
        flex: 1,
        display: "flex", 
        justifyContent: "flex-start", 
    },
    footer: { 
        
        backgroundColor: "#5A65FB",
        marginLeft: "20%", 
        marginRight: "20%",
        marginBottom: "5%",
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
        flex: 100
    },
    inputBox : {
        backgroundColor: "#A6BAF9", 
        borderColor: "#6C3CF2",
        borderWidth: 2,
        borderRadius: 10,
        textAlign: "center", 
        flex: 3, 
        // marginRight: "5%",
    }, 
    listItem: { 
        flex: 1
    },
    listContainer: {
        flex: 1
    },
    inputContainer: { 
        display: "flex", 
        flexDirection: "row", 
        alignItems: "stretch", 
        padding: 10,
        // padding: "1%",
        height: 75,
        justifyContent: "space-evenly",
        // marginTop: "5%", 
        // marginBottom: "5%",
        // marginLeft: "10%", 
        // marginRight: "10%",
    },
    inputButton: { 
        flex: 1,
    },
    parentContainer: { 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "flex-end",
        alignItems: "stretch"
    }
}

export default function TodoList() {
    const [value, onChangeText] = React.useState('');
    const [list, onChangeList] = React.useState([]);
    const [stack, onChangeStack] = React.useState(Stack());

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
        stack.push(list[ind])
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

    return (

    <View style={styles.pageContainer}>
      <View style={styles.header}>
        <Text style={styles.headerText}> To-do List</Text>
      </View>
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
                    <Button
                        style={styles.inputButton}
                        color="#A938F4"
                        title="Add"
                        onPress={() => onPress()}
                        disabled={value === ''}
                    /> 
                </View>

                <ScrollView>
                    <FlatList style={styles.listContainer}
                        data={list}
                        renderItem={
                            ({item, index}) =>  
                                <ListItem key={index} toggleComplete = {() => toggleCompletion(index)} onPress={() => deleteItem(index)} item={item}/>
                        }
                    />
                </ScrollView>
                {/* { 
                    list.map((elem, ind) => <ListItem key={ind} toggleComplete = {() => toggleCompletion(ind)} onPress={() => deleteItem(ind)} item={elem}/>)
                } */}
            </View>
            
        </View>
      </View>
      <View style={styles.footer}>
        <Button 
            title="Undo"
            onPress={() => undo()}
            disabled={stack.length() === 0}
        />
      </View>
    </View>   
)
}