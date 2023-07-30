// const user: (string | number)[] = [1, "hrwells"]
let tUser: [string, number, boolean]

tUser = ["hc", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

const newUser: User = [112, "hrwells@gmail.com"]

newUser[1] = "hrwells.com"
newUser.push(122)

console.log(newUser)


export {}