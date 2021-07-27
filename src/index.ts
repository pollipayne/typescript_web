import { User } from './models/User';
import axios from 'axios';

const user = new User({ id: 1 });


// user.fetch();


// user.set({ name: "Agent Orange", age: 20 })

// user.save();


const newUser = new User({ name: "Melody" });

newUser.save();




