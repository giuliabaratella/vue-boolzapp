
const { createApp } = Vue
// import { contactList } from "./data"

createApp({
    data(){
        return {
            contacts:[
                {
                    id: 1,
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 2,
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 3,
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 4,
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 5,
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 6,
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    id: 7,
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    id: 8,
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        // {
                        //     date: '10/01/2020 15:30:55',
                        //     message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        //     status: 'received'
                        // },
                        // {
                        //     date: '10/01/2020 15:50:00',
                        //     message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        //     status: 'sent'
                        // },
                        // {
                        //     date: '10/01/2020 15:51:00',
                        //     message: 'OK!!',
                        //     status: 'received'
                        // }
                    ],
                }
            ],
            activeUser: null,
            newMessage:'',
            searchContact:'',
            possibleAnswers: [
                'Domani ci vediamo?',
                'Scusa, ti richiamo più tardi',
                'Grazie!',
                'Prova a sentire Claudia',
                'A tra poco',
                'Mi sono ricordato che devo comprare il pane',
                'Devo scappare',
                'Ho voglia di un gelato',
                'Hai più sentito Davide?',
                'Ti aggiorno più tardi',
                'Hai visto il meteo?',
            ],
            msgHover : null,
            splashpage: true,
            biggerFont: false,
            showTitle: false,
            notificationsActive: false,
            showChat: false,
            messageIndex: null,
            openChatMenu: false,
            openContactsMenu: false,
            openAddContactMenu: false,
            newContactPopup: false,
            newContactName: '',
            lastId: 8,
            chooseAvatar:'',
        }
    },
    methods: {
        getTiming(string){
            if(string.length > 5){
                return time = string.slice(-8, -3);
            }else {
                return string;
            }

        },
        lastMessage(array){
            if(array.length > 0){
                return array[array.length -1].message;
            }else {
                return 'Non ci sono messaggi'
            }
            
        },
        openChat(i){
            this.activeUser = i;
            this.showChat = true;
            this.newMessage = '';
            if(this.activeContact.messages.length > 0){
                this.$nextTick(()=> {
                    this.$refs.msgs[this.$refs.msgs.length -1]. scrollIntoView({behavior: 'smooth'});
                })
            }
            
        },
        addMsg(){
            const newMsg = {
                date: this.currentTime(),
                message:this.newMessage,
                status: 'sent',
            }
            if(this.newMessage && this.newMessage.trim()){
                this.activeContact.messages.push(newMsg);
                this.$nextTick(()=> {
                    this.$refs.msgs[this.$refs.msgs.length -1].scrollIntoView({behavior: 'smooth'});
                })
                this.getAnswer();
            }
            this.newMessage = '';
        },
        getAnswer(){
            setTimeout(this.addAnswer, 1000);
        },
        addAnswer(){
            const rndMsg = this.possibleAnswers[Math.floor(Math.random() * (this.possibleAnswers.length))];
            const newAnswer = {
                date: this.currentTime(),
                message: rndMsg,
                status: 'received',
            }
            this.activeContact.messages.push(newAnswer);
            this.$nextTick(()=> {
                this.$refs.msgs[this.$refs.msgs.length -1].scrollIntoView({behavior: 'smooth'});
            })
        },
        lastMsgTime(array){
            if(array.length > 0){
                return array[array.length -1].date;
            }else {
                return ''
            }
        },
        lastAccess(){
            const len = this.activeContact.messages.length;
            if(len > 0){
                return this.activeContact.messages[len - 1].date;
            } else {
                return 'Unknown';
            }
        },
        filterContacts(){
            this.contacts.forEach((contact)=>{
                if (contact.name.toLowerCase().startsWith(this.searchContact)){
                    contact.visible = true;
                }
                else {
                    contact.visible = false;
                }
            })
        },
        currentTime(){
            const now = new Date();
            return HoursMinutes = now.getHours()+ ':' + now.getMinutes();
        },
        deleteMsg(i){
            this.activeContact.messages.splice(i,1);
            this.messageIndex = null;
        },
        showApp(){
            this.splashpage = false
        },
        openOptions(i){
            if (this.messageIndex === null){
                this.messageIndex = i;
            } else {
                this.messageIndex = null;
            }

        },
        deleteChat(){
            this.activeContact.messages = [];
        },
        deleteContacts(){
            this.contacts = [];
            this.activeUser = null;
        },
        deleteActiveContact(){
            if (this.activeUser !== null){
                this.contacts.splice(this.activeUser,1);
                this.activeUser = null;
            }
        },
        addNewContact(){
            let newContactImage = '';
            if (this.chooseAvatar === '1'){
                newContactImage = './img/avatar_1.jpg';
            }else if (this.chooseAvatar === '2'){
                newContactImage = './img/avatar_6.jpg';
            }else if (this.chooseAvatar === '3'){
                newContactImage = './img/generic-user.png';
            }else {
                newContactImage = './img/generic-user.png';
            }
            console.log(this.newContactImage)
            const newContact = {
                id: this.lastId + 1,
                name: this.newContactName,
                avatar: newContactImage,
                visible: true,
                messages: [],
            }
            if(this.newContactName && this.newContactName.trim()){
                this.contacts.push(newContact);
                console.log(newContact);
                this.lastId++;
                this.newContactName = '';
                this.chooseAvatar = '';
            }

        },
    },
    computed: {
        activeContact(){
            return this.contacts[this.activeUser];
        }
    },
    mounted() {
        setTimeout(this.showApp,2000);
        this.showTitle = true;
    }
}).mount('#app')



