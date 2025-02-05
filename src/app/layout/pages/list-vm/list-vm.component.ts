import {Component, inject} from '@angular/core';
import {VmCardComponent} from "../../../components/vm-card/vm-card.component";
import {ApiResponse} from "../../../interfaces/api.interface";
import {ApiService} from "../../../api.service";
import {NgForOf} from "@angular/common";
import {VmElement} from "../../../interfaces/element.interface";
import {HttpErrorResponse} from "@angular/common/http";
import {PopupDialog} from "../../../components/example/dialog-elements-example";
import {MatDialog} from "@angular/material/dialog";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from "@angular/material/card";


@Component({
  selector: 'app-list-vm',
  imports: [
    VmCardComponent,
    MatCardContent,
    MatCardSubtitle,
    MatCardTitle,
    MatCardHeader,
    MatCard
  ],
  templateUrl: './list-vm.component.html',
  styleUrl: './list-vm.component.css'
})
export class ListVmComponent {
  response: ApiResponse|null = null;
  vmList: VmElement[] |null = null
  apiService = inject(ApiService)
  timerId: any;
  isHaveApiError: boolean = false;

  readonly dialog: MatDialog = inject(MatDialog);

  getVmList()
  {
    if (this.isHaveApiError) {
      return
    }
    this.apiService
        .getVmList
        .subscribe(
            result => {
              this.response = result;
              this.vmList = result?.data
            },
            error => {
              this.isHaveApiError = true
              this.dialog.open(PopupDialog, {
                data: { message: `Не удалось получить список виртуальных машин. Ошибка API: ${error.message}` },
              })
            }
        )
    return true
  }

  ngOnInit() {
    if (this.getVmList()) {
      this.timerId = setInterval(() => {
        this.getVmList()
      }, 2000);
    } else {
      clearInterval(this.timerId);
    }

  }

  ngOnDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }


}
