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
    
    readonly city: string = "Mumbai"

    constructor(
        public email: string, 
        public name: string,
        // private userId: string
        ){
    }
}


const hrwells = new User("hrwells@gmail.com","hrwells")