import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {ApiResponse} from "./interfaces/api.interface";
import {catchError, throwError} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    http = inject(HttpClient);
    endpointUrl: string = '/api.php'


    get getVmList() {
        const fd = new FormData()
        fd.append('action', 'getList');
        return this.http.post<ApiResponse>(this.endpointUrl, fd)
    }

    runVm(vmId: any) {
        const fd = new FormData()
        fd.append('action', 'turnOn');
        fd.append('vmid', vmId);
        return this.http.post<ApiResponse>(this.endpointUrl, fd);
    }

    stopVm(vmId: any) {
        const fd = new FormData()
        fd.append('action', 'turnOff');
        fd.append('vmid', vmId);
        return this.http.post<ApiResponse>(this.endpointUrl, fd);
    }

    rebootVm(vmId: any) {
        const fd = new FormData()
        fd.append('action', 'reboot');
        fd.append('vmid', vmId);
        return this.http.post<ApiResponse>(this.endpointUrl, fd);
    }

    resetVm(vmId: any) {
        const fd = new FormData()
        fd.append('action', 'reset');
        fd.append('vmid', vmId);
        return this.http.post<ApiResponse>(this.endpointUrl, fd);
    }
}
