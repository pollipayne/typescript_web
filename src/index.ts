import { userInfo } from 'os';
import { User } from './models/User';




const user = User.buildUser({ id: 6 })

user.fetch();
console.log(user)