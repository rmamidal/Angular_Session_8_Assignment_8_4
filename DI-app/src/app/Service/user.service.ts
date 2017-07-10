// Importing required components.
import { Injectable } from "@angular/core"
import { UserClass } from "../Model/user"

// Injectable Decorator.
@Injectable()
export class UserData {
    // userList Array.
    userList: Array<UserClass> = new Array<UserClass>();

    // Get user data.
    getUserData() {
     return this.userList =[]
    }
    // Add user data.
    addUserData(userDetail: UserClass) {
        this.userList.unshift(userDetail);
    }
}
