export class Model {
    user;
    items;

    constructor(){
        this.user="Emre"
        this.items=[
            new TodoItem("Spor",true),
            new TodoItem("Egitim",false),
            new TodoItem("Yazılım",true)
        ]
    }
}

export class TodoItem{
    description:string;
    action:boolean;

    constructor(description:string,action:boolean){
        this.description=description;
        this.action=action;
    }
}