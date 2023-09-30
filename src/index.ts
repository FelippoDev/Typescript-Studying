import CUser from "../classes/user.js"

type User = {
    readonly _id: number;
    name: string;
    age: number;
    isActive: boolean;
    description?: string;
    documentNumber: string | null
  };
  
  
  type Admin = {
      readonly _id: number,
      isActive: boolean,
      username: string
  }
  
  const users: Array<User|Admin> = [];
  const adminUsers: User[] = []
  const stringNdigits: Array<number|string> = []
  
  
  function createUser({ name, age, isActive = false }: User): User {
    let user: User = {
      _id: 23,
      name,
      age,
      isActive,
      description: "Description",
      documentNumber: null
    };
    users.push(user)
    return user;
  }
  
  function getdata(data: number|string): Array<string|number>{
      stringNdigits.push(data)
      return stringNdigits
  }
  
  function allUsers(): Array<User|Admin>{
      return users
  }
  getdata(1)
  getdata("1")

let user1 = new CUser("felippodev", "felippodev@gmail.com", "@Teste123", "12")
console.log(user1.email)