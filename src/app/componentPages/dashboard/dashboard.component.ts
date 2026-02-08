import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LeadsService } from '../../services/leads.service';
import { Lead } from '../../models/leads.model';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgIf, FormsModule, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  constructor(private leadsService: LeadsService) {}

 user:string ="Sushma"
//  isSeeLeadsClicked = false;
//  isAddNewLeadClicked = false;
//  customColor:string = "green";
//  searchText:string='';
  // leads: Lead[] = [];
//  newLead: Lead = {
//   id: 0,
//   name: '',
//   stage: 'New'
// };


ngOnInit() {
  // this.leads = this.leadsService.getLeads();
}

// get filteredLeads() {
//   if (!this.searchText) {
//     return this.leads;
//   }
//   const search = this.searchText.toLowerCase();

//   return this.leads.filter(lead =>
//     lead.name.toLowerCase().includes(search) ||
//     lead.stage.toLowerCase().includes(search)
//   );
// }

//  onSeeLeadsClick(){
//   this.isSeeLeadsClicked = !this.isSeeLeadsClicked;
//  }

//  onAddNewLeadClick(){
//   this.isAddNewLeadClicked = !this.isAddNewLeadClicked;
//  }

//  addLead() {
//   if (!this.newLead.name) {
//     return;
//   }
//   const leadToAdd: Lead = {
//     id: this.leads.length + 1,
//     name: this.newLead.name,
//     stage: this.newLead.stage
//   };

//   this.leadsService.addLead(leadToAdd);

//   this.newLead = { id: 0, name: '', stage: 'New' };
// }

}
