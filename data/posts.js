import { USERS } from "./users";

export const POSTS = [
    {
        imageUrl: 'http://i.ibb.co/182bP1y/4k.png',
        user: USERS[0].user,
        likes: 7870,
        caption: 'Building the Netflix clone with React JS 🚀. This is going to be a fun build. #reactjs #firebase #dev',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'theqazman',
                comment: 'Wow! This is build look fire. Super excited about'
            },
            {
                user: 'amaanath.dev',
                comment: 'Once I wake, I will finally be ready to code this up '
            }
        ]
    },
    {
        imageUrl: 'http://i.ibb.co/182bP1y/4k.png',
        user: USERS[1].user,
        likes: 7870,
        caption: 'Train Ride to Hogwarts. 😂',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'cleverqazi',
                comment: 'yo'
            },
            {
                user: 'amaanath.dev',
                comment: 'I am SLEEPING'
            }
        ]
    }
]