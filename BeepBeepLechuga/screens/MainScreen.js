import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native'; 
import { Text, Button, Title, Card, TextInput } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setTitle, setArtist, addSongThunk } from './../actions';
import db from '../firebaseConfig';


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
        db.collection('songs').get()
        .then(docs => {
            docs.forEach(doc =>
                {
                if (doc.exists) { 
                    console.log(doc.data()); 
                   
                }
            }   
            )
        })
        .catch(err => console.log('Error ', + err))
    }

    render() { 
        console.log("PROPS\n\n", this.props)
        return ( 
            <View style={styles.container}> 
                <Card style={{elevation: 10 }}> 
                    <Card.Content>
                        <Title style={styles.titleStyle}> 
                            Howdy partner
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
                        <Button mode="outlined" onPress={() => this.props.addSongThunk()}> 
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
        addSongThunk,
    }, dispatch)
)
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen)