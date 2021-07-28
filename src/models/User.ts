import { Sync } from './Sync';
import { Eventing } from './Eventing';




// interface for User attributes 
export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}


export class User {

  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>('http://localhost:3000/users');

}