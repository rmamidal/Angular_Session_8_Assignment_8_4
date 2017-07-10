// Importing required components.
import { Injectable} from "@angular/core"
import { UserSalutation } from "../Model/user.salutation"

//Injectable Decorator.
@Injectable()
export class UserSalutationService {
    // User Salutation Array collection.
    userSalutationList: Array<UserSalutation> = new Array<UserSalutation>();

    // Get Salutation method.
    getUserSalutation() {
        return this.userSalutationList =[
            { id: 1, title: "Mr." },
            { id: 2, title: "Mrs." }
        ]
    }

}

