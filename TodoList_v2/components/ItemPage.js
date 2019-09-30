import React from 'react'; 
import { Button, View, Text } from 'react-native'; 

export default function ItemPage(props) { 
    return (
        <View> 
            <Text>
                {props.navigation.getParam("item")['value'] }
            </Text>
            <Text> 
                {props.navigation.getParam("item")["date"]}
            </Text>
            <Button
                color="#A938F4"
                title="Toggle Completion"
                onPress={() => props.navigation.state.params['complete']()}
            />         
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