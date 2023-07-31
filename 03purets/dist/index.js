"use strict";
// class User {
//     public email: string
//     private name: string
//     readonly city: string = "Mumbai"
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.city = "Mumbai";
    }
}
const hrwells = new User("hrwells@gmail.com", "hrwells");
