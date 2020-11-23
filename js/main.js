const loggedUser = {
    avatarUrl: 'img/avatar_io.jpg',
    nameUser: 'Gabriele'
};

let date = new Date();
let currentDate = date.toLocaleDateString() + ' ' + date.toLocaleTimeString();

const contacts = [
    {
        avatarUrl: 'img/avatar_1.jpg',
        nameUser: 'Michele',
        lastSeen: date.toLocaleTimeString(),
        hystoryMessage: [
            {
                text: 'La marianna va in campagnia',
                sentTime: currentDate,
                type: 'sent'
            },
            {
                text: 'Hai sbagliato numero',
                sentTime: currentDate,
                type: 'received'
            },
            {
                text: 'Ah scusa!',
                sentTime: currentDate,
                type: 'sent'
            },
        ]
    },
    {
        avatarUrl: 'img/avatar_2.jpg',
        nameUser: 'Fabio',
        lastSeen: date.toLocaleTimeString(),
        hystoryMessage: [
            {
                text: 'Prova 1',
                sentTime: currentDate,
                type: 'sent'
            },
            {
                text: 'Prova 2',
                sentTime: currentDate,
                type: 'received'
            }
        ]
    },
    {
        avatarUrl: 'img/avatar_3.jpg',
        nameUser: 'Samuele',
        lastSeen: date.toLocaleTimeString(),
        hystoryMessage: [
            {
                text: 'Prova 3',
                sentTime: currentDate,
                type: 'sent'
            },
            {
                text: 'Prova 4',
                sentTime: currentDate,
                type: 'received'
            }
        ]
    },
    {
        avatarUrl: 'img/avatar_8.jpg',
        nameUser: 'Luisa',
        lastSeen: date.toLocaleTimeString(),
        hystoryMessage: [
            {
                text: 'Prova 5',
                sentTime: currentDate,
                type: 'sent'
            },
            {
                text: 'Prova 6',
                sentTime: currentDate,
                type: 'received'
            }
        ]
    },
    
]

const app = new Vue({
    el: '#root',
    data: {
        contacts: [...contacts],
        loggedUser: {...loggedUser},
        currentUserIndex: 0,
    },
    methods: {
        userSelected: function(i){
            this.currentUserIndex = i;
        },
    }
})