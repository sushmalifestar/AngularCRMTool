import { Injectable } from '@angular/core';
import { Lead } from '../models/leads.model';

@Injectable({
  providedIn: 'root'
})
export class LeadsService {

  constructor() { }

  private leads:Lead[] = [
    { id: 1, name: 'John', stage: 'New' },
    { id: 2, name: 'Anita', stage: 'Contacted' },
    { id: 3, name: 'Rahul', stage: 'Closed Won' }
  ];

  getLeads() : Lead[] {
    return this.leads;
  }

  addLead(lead: Lead) {
    this.leads.push(lead);
  }

}
