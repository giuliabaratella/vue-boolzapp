
const { createApp } = Vue
import { contactList } from "./data"

createApp({
    data(){
        return {
            contacts: contactList,
        }
    },
    methods: {
       
    }
}).mount('#app')



