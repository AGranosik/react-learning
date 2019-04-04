
// Action - type for reducer, payload it is what is invoked in reducer
// on particular action type
export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
}