// Importing required components.
import { Component, Injectable } from "@angular/core";
import { UserClass } from "./Model/user"
import { UserData } from "./Service/user.service"
import { UserSalutation } from "./Model/user.salutation"
import { UserSalutationService } from './Service/user-salutation.service'

// Component Decorator
@Component ({
    selector: "user-app",
    templateUrl: "./View/user.component.html",
    providers: [UserData] // Service callied in component providers.
})
export class UserComponent {
  // Binding logic.
  currentUser: UserClass = new UserClass();

  // User list array.
  userList: Array<UserClass> = new Array<UserClass>();

  // User Salutation list Array.
  userSalutationList: Array<UserSalutation> = new Array<UserSalutation>();
  constructor(private _userData: UserData, private _userSalutation: UserSalutationService) {
  }
  ngOnInit() {
      this.userList = this._userData.getUserData();
      this.userSalutationList = this._userSalutation.getUserSalutation();
  }
 
  addUser() {
     this._userData.addUserData(this.currentUser);
     this.currentUser = new UserClass(); // Clear fields once user created.
  }
  
}