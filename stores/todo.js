import { makeAutoObservable } from "mobx"

export class Todo {
    list = ['Eat', 'Sleep']

    constructor() {
        makeAutoObservable(this)
    }
    
    addTask(task) {
        console.log(this.list)
        this.list.push(task)
    }
}