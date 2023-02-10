import { Component } from '@angular/core';
import {Todo} from './todo'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'new-app';
  todoValue:string ="";
  list:Todo[]=[];


  ngOnInit(){
    this.list=[];
    this.todoValue=""
  }

  addItem(){
    if(this.todoValue !== ""){
      const todoItem : Todo = {
        id: Date.now(),
        value:this.todoValue,
        isDone:false
      }
      this.list.push(todoItem);
    }
    this.todoValue="";
  }

  deleteItem(id:number){
    this.list= this.list.filter(element=>element.id !== id);
  }
}
