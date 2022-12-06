import { AdduserDailogComponent } from './../../dailog/adduser-dailog/adduser-dailog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }


  openDialog(){
    this.dialog.open(AdduserDailogComponent,{width:'30%'});
  }
}
