import axios from "axios";

let store = {
    isFetchingUser: false,
    user: {},
    error: false,
    authenticated: true,
    getstate: function (){
        return this
    },
    login: async function ({username, password} ){
       return axios.post('login', 
            {username, password}
        )
    }
};

export default store