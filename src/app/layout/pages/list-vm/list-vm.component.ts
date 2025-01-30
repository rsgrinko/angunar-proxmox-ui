import {Component, inject} from '@angular/core';
import {VmCardComponent} from "../../../components/vm-card/vm-card.component";
import {ApiResponse} from "../../../interfaces/api.interface";
import {ApiService} from "../../../api.service";
import {NgForOf} from "@angular/common";
import {VmElement} from "../../../interfaces/element.interface";


@Component({
  selector: 'app-list-vm',
  imports: [
    VmCardComponent
  ],
  templateUrl: './list-vm.component.html',
  styleUrl: './list-vm.component.css'
})
export class ListVmComponent {
  response: ApiResponse|null = null;
  vmList: VmElement[] |null = null
  apiService = inject(ApiService)
  timerId: any;

  getVmList() {
    this.apiService.getVmList.subscribe((data: ApiResponse | null) => {
      this.response = data;
      this.vmList = data?.data
    })
  }

  ngOnInit() {
    this.getVmList()
    this.timerId = setInterval(() => {
      this.getVmList()
    }, 2000);
  }

  ngOnDestroy() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }


}
