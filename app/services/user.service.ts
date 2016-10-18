import { Injectable } from '@angular/core';
@Injectable()
export class UserService {
    private userName:string = 'Alberto';
    private userLastName : string = 'Dominguez';
    getUserName() {
        return this.userName;
    }
    setUserName(userName) {
        this.userName = userName;
    }

    getUserLastName() {
        return this.userLastName;
    }
    setUserLastName(userLastName) {
        this.userLastName = userLastName;
    }
}