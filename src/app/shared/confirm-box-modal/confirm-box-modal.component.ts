import { Component, Input, SimpleChanges } from '@angular/core';
import { ConfirmBoxModalService } from 'src/app/core/services/confirm-box-modal.service';

@Component({
  selector: 'app-confirm-box-modal',
  templateUrl: './confirm-box-modal.component.html',
  styleUrls: ['./confirm-box-modal.component.scss']
})
export class ConfirmBoxModalComponent {
  @Input() title : string = "Bạn có muốn xóa công việc này không?";
  @Input() description: string = "Công việc sẽ được sẽ vĩnh viễn không thể khôi phục được"

  @Input()cancel_var: boolean = false;
  @Input()message: any = {title: 'Bạn có muốn xóa công việc này không?', description: 'Công việc sẽ được xóa vĩnh viễn và không thể khôi phục lại'};
  @Input()isLoading: boolean = false;
  @Input()isDisplay: boolean = false;
  approval: boolean = false;
  fadeBackground: boolean = false;

  constructor(private confirm_sv: ConfirmBoxModalService) {} 

  ngOnChanges(changes: SimpleChanges): void {
    this.fadeBackground = true;
    this.cancel_var = false;
    this.message;
    console.log("asdsads: ", this.cancel_var);           
  }

  ngOnInit(): void {
    console.log("123");
  }

  cancel() {
    this.confirm_sv.sendMessage({
      approval: false,
    })
    this.cancel_var = true;
    this.fadeBackground = false;
    setTimeout(() => {
      this.confirm_sv.sendMessage({
        isDisplay: false
      })
    }, 5000)
  }

  approve() {
    this.confirm_sv.sendMessage({
      approval: true,
    })
    this.cancel_var = true;
    this.fadeBackground = false;
    setTimeout(() => {
      this.confirm_sv.sendMessage({
        isDisplay: false
      })
    }, 500)
  }

}
