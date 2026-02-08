import { Component } from '@angular/core';
import { Lead } from '../../models/leads.model';
import { LeadsService } from '../../services/leads.service';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-lead',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './add-lead.component.html',
  styleUrl: './add-lead.component.css'
})
export class AddLeadComponent {

  constructor(private leadsService: LeadsService) {}

  newLead: Lead = {
    id: 0,
    name: '',
    stage: 'New'
  };
  message: string = '';

  addLead(form: NgForm) {
    if (form.invalid) {
      console.log("inside");
      return;
    }
    console.log("outside");
    const leadToAdd: Lead = {
      id:  Date.now(),
      name: this.newLead.name,
      stage: this.newLead.stage
    };
  
    this.leadsService.addLead(leadToAdd);
    this.message = 'Lead added successfully ✔';
  
    form.resetForm({ stage: 'New' });
  }
}
