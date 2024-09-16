import {createSlice} from "@reduxjs/toolkit";

const globalState = {
    users: [],
    pages: [],
    helpProp: []
}


export const getInfoUsersSlice = createSlice({
    name: 'getInfoUsers',
    initialState: globalState,

    reducers: {
        addUserInCollections(state = globalState, action){
            console.log("this is action", action)
        }
    }

})

export default getInfoUsersSlice.reducer;
export const {addUserInCollections} = getInfoUsersSlice.actions