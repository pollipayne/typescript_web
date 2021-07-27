import { User } from './models/User';


const user = new User({});


user.set({ name: "Noodles", age: 65 })

user.on('click', () => { console.log('hiiiiii') });
user.on('change', () => { console.log('hello agaiiiin ') })

user.trigger('click')
user.trigger('change')



