import { createSlice } from "@reduxjs/toolkit";



const playSlice = createSlice({
    name: 'playlist',
    initialState: {
        playlist: Array(),
        favs : Array()
    },
    reducers: {
        addToPlaylist:(state,action)=>{
            //payload is the data which you are dispatching to fn
            let k:Object = action.payload
            state.playlist.push(k)
        },
        addToFavs:(state,action)=>{
            //payload is the data which you are dispatching to fn
            let k:Object = action.payload
            state.favs.push(k)
        },
    }
})

export const {addToPlaylist,addToFavs} = playSlice.actions

export default playSlice.reducer