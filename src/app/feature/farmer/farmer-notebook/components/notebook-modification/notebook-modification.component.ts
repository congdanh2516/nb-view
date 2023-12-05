import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModificationTaskComponent } from './modification-task/modification-task.component';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notebook-modification',
  templateUrl: './notebook-modification.component.html',
  styleUrls: ['./notebook-modification.component.scss']
})

export class NotebookModificationComponent implements OnInit {

  panelOpenState = true;
  faTrash=faTrash;

  listDataField: any;

  newField : any = {
    title: '',
    type: 'text',
    task: [],
    isEdited: true
  }

  fieldIsEditing: any;

  fieldList: Array<any> = [
    {
      title: 'Chất lượng giống',
      type: 'text',
      task: ['Task 1', 'Task 2', "Task 3"],
      isEdited: true
    }
  ];

  test: string = "abc"

  fieldListBackup : any = [];

  
  constructor(public dialog: MatDialog) {
    console.log("init: ", this.fieldList);
    // this.opendAssignmentRelatedTask(1);

  }


  public addField() {
    // if(this.userForm.value != null)
    //   if(this.valueTitle != null && this.valueType != null){
    //     this.listDataField.push(this.userForm.value);
    //     this.userForm.reset();
    //     this.clearAll()
    //   }
    console.log("abc");
    this.fieldList[0].isEdited = !this.fieldList[0].isEdited;
    console.log(this.fieldList);
  }

  addNewField() {
    if(this.newField.title!='') {
      this.newField.isEdited = false;
      this.fieldList.push({...this.newField});
      this.newField.title = '';
      this.newField.type = 'text';
      this.newField.task = [];
      this.newField.isEdited = true;
      console.log("fisldList: ", this.fieldList);
    }
  }

  activeEditMode (index: any) {
    this.fieldList[index].isEdited = true;
    this.fieldList.forEach((field: any, i) => {
      if(index!=i) {
        field.isEdited = false;
      }
    })
    this.fieldIsEditing = {...this.fieldList[index]};
    this.newField.isEdited=false;
  }

  updateInputValue(e: any, index: number) {
    console.log("abc");
    this.fieldList[index].title = e.target.value;
    console.log("fieldList: ", this.fieldList);
  }

  resetFieldValue(index: any) {
    console.log("xyz");
    this.fieldList[index] = {...this.fieldIsEditing};
  }

  offAllEditeMode() {
    this.fieldList.forEach((field: any) => {
        field.isEdited = false;
    })
    console.log("blur: ", this.fieldList);
  }

  opendAssignmentRelatedTask(index: number) {
    const dialogRef = this.dialog.open(ModificationTaskComponent, {
      data: {
        fieldIndex: index,
        taskListId: this.fieldList[index].task
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // reset() {
  //   this.userForm.reset();
  // }

  // removeField(element: any) {
  //   this.listDataField.forEach((value: any,index: any)=>{
  //     if(value == element)
  //     this.listDataField.splice(index,1);
  //   });
  // }

  // editField(element: any, title: any, type: any, task: any) {
  //   this.listDataField.forEach((value: any,index: any)=>{
  //     if(value == element)
  //     this.listDataField.splice(index,1);
  //   });
  // }

  // edit(item: any){
  //   this.listDataField.forEach((element: any) => {
  //     element.isEdit = false;
  //   });
  //   item.isEdit = true;
  // }

  // update(item: any){
  //   if(this.userForm.value != null)
  //     if(this.valueTitle != null && this.valueType != null){
  //       this.listDataField.push(this.userForm.value);
  //       this.userForm.reset();
  //       this.clearAll()
  //       item.isEdit = false;
  //       this.removeField(item)
  //     }
  // }

  // cancel(item: any){
  //   item.isEdit = false;
  // }


  // get optionImage(){
  //   return 
  // }


  ngOnInit() {}
  

  

  // list = [
  //   {
  //     id: 'ParentTaska',
  //     title: 'ParentTask a',
  //     checked: false,
  //   },
  //   {
  //     id: 'a1',
  //     title: 'Taska 1',
  //     checked: false,
  //   },
  //   {
  //     id: 'a2',
  //     title: 'Taska 2',
  //     checked: false,
  //   },
  //   {
  //     id: 'a3',
  //     title: 'Taska 3',
  //     checked: false,
  //   },
  //   {
  //     id: 'ParentTaskb',
  //     title: 'ParentTask b',
  //     checked: false,
  //   },
  //   {
  //     id: 'b1',
  //     title: 'Taskb 1',
  //     checked: false,
  //   },
  //   {
  //     id: 'b2',
  //     title: 'Taskb 2',
  //     checked: false,
  //   },
  //   {
  //     id: 'b3',
  //     title: 'Taskb 3',
  //     checked: false,
  //   },
  // ];

  // form!: FormGroup;

  // //methods
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

  countParent: number | undefined;
  countChangedHandle(count: number) {
    this.countParent = count;
  }

  trackByFn(index: any, item: any) {
    return item.title;
  }

}

export interface DialogData {
  animal: string;
  name: string;
}