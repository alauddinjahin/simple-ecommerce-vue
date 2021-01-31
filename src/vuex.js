
import {createStore} from "vuex"

// for getting and setting auth user with actions
const state={
    user: null
};



const store = createStore({
    state,
    getters:{ // getting user current status
        user: (state)=>{
            return state.user;
        }
    },
    actions:{ // perform actions and commit actions
        user(context,user)
        {
            context.commit('user',user);
        }
    },
    mutations:{ // change user status everytime when you call
        user(state,user)
        {
            state.user=user;
        }
    },
})

export default store; 

