import { userInfo } from 'os';
import { User } from './models/User';



// const newUser = new User({ name: "Banana", age: 654 });



// console.log(newUser.get('name'))

// newUser.on("change", () => { console.log("User was changed") })
// newUser.set({ name: "oranges" })


const user = new User({ id: 1, name: "Hulk Hogan", age: 675 })

user.on('save', () => {
  console.log(user);
});

user.save();

