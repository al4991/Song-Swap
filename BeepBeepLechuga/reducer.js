import { ADD_SONG, SET_TITLE, SET_ARTIST } from './types'; 
import db from './firebaseConfig';

const INITIAL_STATE = {
    title: '',
    artist: ''
}

export default function reducer(state = INITIAL_STATE, action) { 
    switch(action.type) { 
        case ADD_SONG: {
            return {
                ...state, 
                'title' : '', 
                'artist': ''
            }
            // let { title, artist } = state; 
            // db.collection('songs').add({
            //     artist: artist, 
            //     count: 3, 
            //     name: title, 
            // })
            // .then(() => {
            //     console.log('yeet')
            //     return {
            //         ...state, 
            //         'title' : 'test', 
            //         'artist': 'test'
            //     }
            // })
            // .catch(err => console.log(err))
            
        }
        case SET_TITLE: {
            let { title } = state; 
            title = action.payload; 
            return {
                ...state, 
                title
            }
        }
        case SET_ARTIST: {
            let { artist } = state; 
            artist = action.payload; 
            return {
                ...state, 
                artist
            }
        }
        default: {
            return state; 
        }
    }

}

