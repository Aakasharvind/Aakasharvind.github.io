import { Component ,Output,EventEmitter} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() todoadd: EventEmitter<Todo> =new EventEmitter();
  title: string 
  desc: string 
  constructor(){

  }
  onSubmit(){


    const todo= {

      sno:8,
      title:this.title,
      desc:this.desc,
      active:true
    }

    this.todoadd.emit(todo);
  }
  

}
