import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice ({
    name : "app",
    initialState : {
        isMenuOpen : true,
        isCatMenuOpen : true,
        isSubMenuOpen : true,
        isWatchMenuOpen : true,

    },
    reducers : {
        toggleMenu : (state) =>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        categoryMenu :(state) =>{
            state.isCatMenuOpen = !state.isCatMenuOpen;
        },
        subscriptionMenu :( state) =>{
            state.isSubMenuOpen = !state.isSubMenuOpen;
        },
        watchLetterMenu : (state) =>{
            state.isWatchMenuOpen = !state.isWatchMenuOpen;
        },
        closeMenu: (state) => {
            state.isMenuOpen = false;
        },
    },
});

export const {toggleMenu , categoryMenu , subscriptionMenu , watchLetterMenu , closeMenu} = appSlice.actions;
export default appSlice.reducer;