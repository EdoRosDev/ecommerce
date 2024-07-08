export class UserDTO {

    iduser: number;

    username: string;
 
    password: string;

    constructor(iduser: number, username:string, password:string){
        this.iduser = iduser
        this.username = username
        this.password = password
    }

 }