export class User {
    private username: string

    constructor(username: string){
        this.username = username
    }

    public getUsername(){
        return this.username
    }

    public destroy(){
        this.username = ''
    }
}