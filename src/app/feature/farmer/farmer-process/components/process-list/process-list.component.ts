import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-process-list',
  templateUrl: './process-list.component.html',
  styleUrls: ['./process-list.component.scss']
})
export class ProcessListComponent {
  faPlus = faPlus;
  personalProcessBool : Boolean = true; //true: co quy trinh, false: chua co quy trinh
}
