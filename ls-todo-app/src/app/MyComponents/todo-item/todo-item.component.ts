import { Component, Input, OnInit ,EventEmitter, Output} from '@angular/core';
import { Todo } from 'src/app/Todo';


@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent{

  @Input() todoinp : Todo;
  @Input() i:number;
  @Output() tododelete: EventEmitter<Todo> =new EventEmitter();
  @Output() todocheckbox: EventEmitter<Todo> =new EventEmitter();

  constructor(){

    

  }

  onClick(todo : Todo){
    this.tododelete.emit(todo);
    console.log("Event is triggered!");
  }


  oncheckboxclick(todo:Todo){
    this.todocheckbox.emit(todo);
    
  }
 
}
