import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native'; 
import { Text, Button, Title, Card, TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setTitle, setArtist, swapSong, retrieveHistory } from './../actions';


const styles = StyleSheet.create({
    container: { 
       display: 'flex', 
       flexDirection: 'column', 
       justifyContent: 'center', 
       alignContent:'center',
       paddingTop: 300,
       paddingLeft: 40, 
       paddingRight: 40, 
    },
    cardActionsContainer: {
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center'
    },
    titleStyle: {
        textAlign: 'center', 
    }
})

class MainScreen extends Component {
    componentDidMount() {
        this.props.retrieveHistory(); 
    }
    render() { 
        return ( 
            <View style={styles.container}> 
                <Card style={{elevation: 10 }}> 
                    <Card.Content>
                        <Title style={styles.titleStyle}> 
                            Put in a song!
                        </Title>
                        <TextInput
                        label='title'
                        value={this.props.title}
                        onChangeText={text => this.props.setTitle(text)}
                        />
                        <TextInput
                        label='artist'
                        value={this.props.artist}
                        onChangeText={text => this.props.setArtist(text)}
                        />
                    </Card.Content>
                    <Card.Actions style={styles.cardActionsContainer}> 
                        <Button onPress={async () => {
                            await this.props.swapSong();
                            this.props.navigation.navigate('Last Song')
                        }
                        }> 
                            Swap! 
                        </Button>    
                    </Card.Actions>
                </Card>
            </View>
        )
    }
}

const mapStateToProps = (state) => { 
    const { title, artist } = state; 
    return { title, artist };
}

const mapDispatchToProps = (dispatch) => (
    bindActionCreators({ 
        setTitle, 
        setArtist,
        swapSong,
        retrieveHistory
    }, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)