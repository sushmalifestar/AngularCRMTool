import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf, FormsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
 user:string ="Sushma"
 isSeeLeadsClicked = false;
 yourLeads : number =26;
 customColor:string = "green";
 searchText:string='';

 onSeeLeadsClick(){
  this.isSeeLeadsClicked = !this.isSeeLeadsClicked;
 }
}
