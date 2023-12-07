import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public addUser(user: User) {
        //Using Local storage
        let users: User[];

        //checking if local storage already present, and if present, assigning it to users.
        const localItem = localStorage.getItem('users');
        if (localItem == null) {
            users = [];
        }
        else {
            users = JSON.parse(localItem);
        }
        //pushing the user to the users Array and saving it into local storage.
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users));
    }
}
