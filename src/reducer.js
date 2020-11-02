export const initialState = {
    user : null,
    playlists: [],
    playing : false,
    iten : null,
   // token:'BQBktBJl-ESCDKd0GsvPt1jwui2ZqgNG5F5BlBqtlqFMg9Yul1LCJFAfGvw15BhTt3kD-NhPF5OtOWtQzib12YtW6G83eir-MQm8_Ly1ahAqnRWV0S7becnr8BeUAIvj3qj1gNFVo7fLdqs0lqqyGcVEpL16A5o3WvKNcuiieVHYPxg6LlAM'
}

const reducer = (state , action ) => {

    console.log(action)

    switch(action.type){
        case "SET_USER":
            return { 
                ...state,
                user:action.user
            }
        case "SET_TOKEN":
            return { 
                ...state,
                token:action.token
            }
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists:action.playlists
            }
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly:action.discover_weekly
            }
        default:
            return state;
    }
}


export default reducer;