const loggedUser = {
    avatarUrl: 'img/avatar_io.jpg',
    nameUser: 'Gabriele'
};

const contacts = [
    {
        avatarUrl: 'img/avatar_1.jpg',
        nameUser: 'Michele',
        lastSeen: new Date().getHours() + ':' + new Date().getUTCMinutes(),
        hystoryMessage: [
            {
                text: 'La marianna va in campagnia',
                sentTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                type: 'sent'
            },
            {
                text: 'Hai sbagliato numero',
                sentTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                type: 'received'
            },
            {
                text: 'Ah scusa!',
                sentTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                type: 'sent'
            },
        ]
    },
    {
        avatarUrl: 'img/avatar_2.jpg',
        nameUser: 'Fabio',
        lastSeen: new Date().getHours() + ':' + new Date().getUTCMinutes(),
        hystoryMessage: [
            {
                text: 'Prova 1',
                sentTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                type: 'sent'
            },
            {
                text: 'Prova 2',
                sentTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                type: 'received'
            }
        ]
    },
    {
        avatarUrl: 'img/avatar_3.jpg',
        nameUser: 'Samuele',
        lastSeen: new Date().getHours() + ':' + new Date().getUTCMinutes(),
        hystoryMessage: [
            {
                text: 'Prova 3',
                sentTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                type: 'sent'
            },
            {
                text: 'Prova 4',
                sentTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(),
                type: 'received'
            }
        ]
    },
    {
        avatarUrl: 'img/avatar_8.jpg',
        nameUser: 'Luisa',
        lastSeen: new Date().getHours() + ':' + new Date().getUTCMinutes(),
        hystoryMessage: [
            
        ]
    },
    
]

const app = new Vue({
    el: '#root',
    data: {
        contacts: [...contacts],
        loggedUser: {...loggedUser},
        currentUserIndex: 0,
        sendMessage: '',
        inputSearchContact: '',
    },
    methods: {
        userSelected: function(i){
            this.currentUserIndex = i;
        },
        submit: function(e) {
            if(e != ''){
                this.contacts[this.currentUserIndex].
                    hystoryMessage.push({
                                            text: e, 
                                            sentTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(), 
                                            type: 'sent'
                                        });
                //this.sendMessage = '';
            }
        },
        generateAnswer: function(i) {
            this.contacts[i].
                    hystoryMessage.push({
                                            text: 'ok', 
                                            sentTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString(), 
                                            type: 'received'
                                        });
        },
        answersRandom: function(i) {
            if(this.sendMessage != ''){
                setTimeout(() => {this.generateAnswer(i)},3000);
                this.sendMessage = '';
                this.autoscroll();
            }
        },
        autoscroll: function() {
           Vue.nextTick(function(){
                let windowChat = document.getElementsByClassName('central-message-box')[0]; 
                windowChat.scrollTop = windowChat.scrollHeight;
            })
        }
    },
    computed: {
        filterUsers() {
            return this.contacts.filter(contact => {
                return contact.nameUser.toLowerCase().includes(this.inputSearchContact.toLowerCase());
            });
        }
    }
});