import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-modification-task',
  templateUrl: './modification-task.component.html',
  styleUrls: ['./modification-task.component.scss']
})
export class ModificationTaskComponent implements OnInit {
  

 constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  count = 5;
  @Output()

  countChanged: EventEmitter<number> = new EventEmitter<number>();
  
  increment(){
    this.count++;
    this.countChanged.emit(this.count);
  }
  
  decrement(){
    this.count--;
    this.countChanged.emit(this.count);
  }

  


  list = [
    {
      id: 'ParentTaska',
      title: 'ParentTask a',
      checked: false,
    },
    {
      id: 'a1',
      title: 'Taska 1',
      checked: false,
    },
    {
      id: 'a2',
      title: 'Taska 2',
      checked: false,
    },
    {
      id: 'a3',
      title: 'Taska 3',
      checked: false,
    },
    {
      id: 'ParentTaskb',
      title: 'ParentTask b',
      checked: false,
    },
    {
      id: 'b1',
      title: 'Taskb 1',
      checked: false,
    },
    {
      id: 'b2',
      title: 'Taskb 2',
      checked: false,
    },
    {
      id: 'b3',
      title: 'Taskb 3',
      checked: false,
    },
  ];

  form!: FormGroup;

  //methods
  onChecked(id: string, checked:boolean){
    if(this.isParent(id)){
      this.list.forEach((item) => {
        if(item.id.charAt(0) == id.slice(-1))
          item.checked = checked;
      })
    }else {
      const allChecked = this.list.every(
        (item) => item.checked
      );
      this.list[0].checked = allChecked;

    }
  }



  clearAll(){
    this.list.forEach((item) => {
      item.checked = false;
    })
  }

  get selectedItems(){
    return this.list.filter((item) => item.checked) 
  }

  get valueOfItem(){
    return this.list.filter((item) => item.checked)
  }

  isParent(id: string){
    return id.startsWith('P')
  }

  identifyParent(id: string){
    return id.slice(-1)
  }

}
