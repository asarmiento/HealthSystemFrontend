import {createLogger, createStore} from 'vuex'

import hospitalModules from "./modules/hospitals"
import authModules from "./modules/auth"
import usersModules from "./modules/users"



// Create a new store instance.
const store = createStore({
    modules: {
        hospitals:hospitalModules,
        auth:authModules,
        users:usersModules,
    },
    plugins: [createLogger()]
})

export default store