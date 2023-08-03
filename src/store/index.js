import {createLogger, createStore} from 'vuex'

import hospitalModules from "./modules/hospitals"
import authModules from "./modules/auth"



// Create a new store instance.
const store = createStore({
    modules: {
        hospitals:hospitalModules,
        auth:authModules,
    },
    plugins: [createLogger()]
})

export default store