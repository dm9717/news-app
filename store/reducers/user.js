const initialState = {
    clips: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_CLIP':
            return {
                ...state,
                clips: [...state.clips, action.clip],
            };
        case 'DELETE_CLIP':
            return {
                ...state,
                clips: state.clips.filter(
                    (clip) => clip.url !== action.clip.url
                ), // If an article has the URL of which article you are trying to delete, fileter out that article
            };
        default:
            return state;
    }
};

export default reducer;
