import React from 'react'; 
import { View, Text } from 'react-native'; 

export default function History(props) { 
    return (
        <View> 
            {props.navigation.state.params['history'].map(
                (elem) => 
                    <View> 
                        <Text> 
                            {elem.value}
                        </Text>
                    </View>
                
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