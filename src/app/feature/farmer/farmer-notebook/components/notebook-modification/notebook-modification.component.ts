import { Component,ElementRef,OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-notebook-modification',
  templateUrl: './notebook-modification.component.html',
  styleUrls: ['./notebook-modification.component.scss']
})

export class NotebookModificationComponent implements OnInit {

  panelOpenState = true;

  userForm: FormGroup;


  listDataField: any;

  constructor(private fb:FormBuilder) {
    this.listDataField = [];

    this.userForm = this.fb.group({
      Title: [],
      Type: [],
      Task: [],
      isEdit: [false],
    })

  }


  get valueTitle(){
    return this.userForm.get('Title')?.value
  }

  get valueType(){
    return this.userForm.get('Type')?.value
  }

  get valueTask(){
    return this.userForm.get('Task')?.value
  }


  public addField() {
    if(this.userForm.value != null)
      if(this.valueTitle != null && this.valueType != null){
        this.listDataField.push(this.userForm.value);
        this.userForm.reset();
        this.clearAll()
      }
  }


  reset() {
    this.userForm.reset();
  }

  removeField(element: any) {
    this.listDataField.forEach((value: any,index: any)=>{
      if(value == element)
      this.listDataField.splice(index,1);
    });
  }

  editField(element: any, title: any, type: any, task: any) {
    this.listDataField.forEach((value: any,index: any)=>{
      if(value == element)
      this.listDataField.splice(index,1);
    });
  }

  edit(item: any){
    this.listDataField.forEach((element: any) => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }

  update(item: any){
    if(this.userForm.value != null)
      if(this.valueTitle != null && this.valueType != null){
        this.listDataField.push(this.userForm.value);
        this.userForm.reset();
        this.clearAll()
        item.isEdit = false;
        this.removeField(item)
      }
  }

  cancel(item: any){
    item.isEdit = false;
  }


  get optionImage(){
    return 
  }


  ngOnInit() {}
  

  

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

  countParent: number | undefined;
  countChangedHandle(count: number) {
    this.countParent = count;
  }

}