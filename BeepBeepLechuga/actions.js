import { SET_TITLE, SET_ARTIST, ADD_SONG } from "./types";
import db from './firebaseConfig';

export const addSong = (dispatch) => (
    {
        type: ADD_SONG
    }
);
export const addSongThunk = () => (
    (dispatch, getState) => {
        const { title, artist } = getState();
        db.collection('songs').add({ 
            artist: artist, 
            count: 3, 
            name: title
        })
        .then(() => { 
            dispatch(addSong()); 
        })
        .catch(err => console.log(err))
    }
)

export const setTitle = (text) => (
    {
        type: SET_TITLE,
        payload: text
    }
)
export const setArtist = (text) => (
    {
        type: SET_ARTIST,
        payload: text
    }
)