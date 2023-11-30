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

  last: string = "";

  constructor(private fb:FormBuilder) {
    this.listDataField = [];

    this.userForm = this.fb.group({
      Title: [''],
      Type: [''],
      Task: [''],
    })

  }


  public addField() {
    if(this.userForm.value != null)
      this.listDataField.push(this.userForm.value);
      this.userForm.reset();
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


  ngOnInit() {}
  

  

  list = [
    {
      id: 'TaskParenta',
      title: 'TaskParenta',
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
      id: 'TaskParentb',
      title: 'TaskParent b',
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
    if(id.startsWith('TaskParent')){
      // this.last = id.slice(-1)
        this.list.forEach((item) => {
          // if(id.startsWith(this.last))
            item.checked = checked;
        })
    }else {
      const allChecked = this.list.every(
        (item) => item.id === 'TaskParent' || item.checked
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
    return this.list.filter((item) => item.checked).values
  }

  


  @ViewChild('myDiv')
  myDiv!: ElementRef;
  @ViewChild('myTextarea')
  myTextarea!: ElementRef;

  addTask() {
    const value = this.myDiv.nativeElement.textContent;
    this.myTextarea.nativeElement.value = value;
  }
}
