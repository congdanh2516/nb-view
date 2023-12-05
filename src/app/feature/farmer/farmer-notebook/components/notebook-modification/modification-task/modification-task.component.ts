import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modification-task',
  templateUrl: './modification-task.component.html',
  styleUrls: ['./modification-task.component.scss']
})
export class ModificationTaskComponent implements OnInit {
  

 constructor(public dialogRef: MatDialogRef<ModificationTaskComponent>,
            @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  countChanged: EventEmitter<number> = new EventEmitter<number>();

  taskList = [
    {
      id: 'Task 1',
      title: 'Chọn giống lúa',
      checked: false,
    },
    {
      id: 'Task 2',
      title: 'Xử lý đất',
      checked: false,
    },
    {
      id: 'Task 3',
      title: 'Ngâm giống',
      checked: false,
    },
    {
      id: 'a3',
      title: 'Bón phân đợt 1',
      checked: false,
    },
    {
      id: 'Phun thuốc đợt 1',
      title: 'Task 5',
      checked: false,
    },
    {
      id: 'a3',
      title: 'Bón phân đợt 2',
      checked: false,
    },
    {
      id: 'Phun thuốc đợt 2',
      title: 'Task 5',
      checked: false,
    }
  ];

  onNoClick(): void {
    this.dialogRef.close();
  }

  //methods
  // onChecked(id: string, checked:boolean){
  //   if(this.isParent(id)){
  //     this.list.forEach((item) => {
  //       if(item.id.charAt(0) == id.slice(-1))
  //         item.checked = checked;
  //     })
  //   }else {
  //     const allChecked = this.list.every(
  //       (item) => item.checked
  //     );
  //     this.list[0].checked = allChecked;

  //   }
  // }



  // clearAll(){
  //   this.list.forEach((item) => {
  //     item.checked = false;
  //   })
  // }

  // get selectedItems(){
  //   return this.list.filter((item) => item.checked) 
  // }

  // get valueOfItem(){
  //   return this.list.filter((item) => item.checked)
  // }

  // isParent(id: string){
  //   return id.startsWith('P')
  // }

  // identifyParent(id: string){
  //   return id.slice(-1)
  // }

  checkCheckBoxvalue(index: any){
    let selectedTask = document.getElementsByName('selectedTask');
    console.log(selectedTask);
    selectedTask.forEach((task: any) => {
      if(task.checked) {
        
      }
    })
  }

  allCheckBox() {
    this.taskList.forEach((task: any, i) => {
      if(this.taskList[i].checked = true)
      console.log(this.taskList[i].title);
    })
  }

}
