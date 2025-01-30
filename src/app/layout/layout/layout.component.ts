import { Component } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {MatToolbar} from "@angular/material/toolbar";
import {MatList, MatListItem} from "@angular/material/list";
import {MatButton} from "@angular/material/button";
import {ListVmComponent} from "../pages/list-vm/list-vm.component";

@Component({
  selector: 'app-layout',
  imports: [
    MatToolbar,
    ListVmComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
