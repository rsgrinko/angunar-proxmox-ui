import {Component, effect, inject, input, InputSignal} from '@angular/core';
import {MatCard, MatCardActions, MatCardHeader, MatCardSubtitle, MatCardTitle} from "@angular/material/card";
import {MatButton} from "@angular/material/button";
import {VmElement} from "../../interfaces/element.interface";
import {ApiService} from "../../api.service";
import {ApiResponse} from "../../interfaces/api.interface";
import {MatDialog} from "@angular/material/dialog";
import {PopupDialog} from "../example/dialog-elements-example";

@Component({
  selector: 'app-vm-card',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardActions,
    MatButton,
    MatCardSubtitle,
    MatCardTitle,
  ],
  templateUrl: './vm-card.component.html',
  styleUrl: './vm-card.component.css'
})
export class VmCardComponent {
  public data: InputSignal<VmElement> = input.required()
  apiService: ApiService = inject(ApiService)
  readonly dialog = inject(MatDialog);

  runVm(vmId: any) {
    this.apiService.runVm(vmId).subscribe((data: ApiResponse | null) => {
      if (data !== null && data.success) {
        this.dialog.open(PopupDialog, {
          data: { message: data.data.message },
        });
      } else {
        this.dialog.open(PopupDialog, {
          data: { message: 'Произошла ошибка при выполнении запроса' },
        });
      }
    })
  }

  stopVm(vmId: any) {
    this.apiService.stopVm(vmId).subscribe((data: ApiResponse | null) => {
      if (data !== null && data.success) {
        this.dialog.open(PopupDialog, {
          data: { message: data.data.message },
        });
      } else {
        this.dialog.open(PopupDialog, {
          data: { message: 'Произошла ошибка при выполнении запроса' },
        });
      }
    })
  }

  rebootVm(vmId: any) {
    this.apiService.rebootVm(vmId).subscribe((data: ApiResponse | null) => {
      if (data !== null && data.success) {
        this.dialog.open(PopupDialog, {
          data: { message: data.data.message },
        });
      } else {
        this.dialog.open(PopupDialog, {
          data: { message: 'Произошла ошибка при выполнении запроса' },
        });
      }
    })
  }

  resetVm(vmId: any) {
    this.apiService.resetVm(vmId).subscribe((data: ApiResponse | null) => {
      if (data !== null && data.success) {
        this.dialog.open(PopupDialog, {
          data: { message: data.data.message },
        });
      } else {
        this.dialog.open(PopupDialog, {
          data: { message: 'Произошла ошибка при выполнении запроса' },
        });
      }
    })
  }
}
