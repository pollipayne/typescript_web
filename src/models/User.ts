import { Sync } from './Sync';
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';
import { AxiosPromise, AxiosResponse } from 'axios';




// interface for User attributes 
export interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}


export class User {

  public events: Eventing = new Eventing();
  public sync: Sync<UserProps> = new Sync<UserProps>('http://localhost:3000/users');
  public attributes: Attributes<UserProps>;


  constructor(attrs: UserProps) {
    this.attributes = new Attributes<UserProps>(attrs);
  }

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  get get() {
    return this.attributes.get;
  }

  set(update: UserProps): void {
    this.attributes.set(update);
    this.events.trigger('change');
  }

  fetch(): void {
    const id = this.attributes.get('id')
    if (typeof id !== 'number') {
      throw new Error('Cannot fetch without ID')

    }
    this.sync.fetch(id).then((response: AxiosResponse): void => {
      this.set(response.data);
    })
  }

  save(): void {
    this.sync.save(this.attributes.getAll())
      .then((response: AxiosResponse): void => {
        this.trigger('save');
      })
      .catch(() => {
        this.trigger('error');
      });
  }
}