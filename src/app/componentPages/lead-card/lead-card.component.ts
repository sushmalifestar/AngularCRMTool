import { Component, Input } from '@angular/core';
import { Lead } from '../../models/leads.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-lead-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './lead-card.component.html',
  styleUrl: './lead-card.component.css'
})
export class LeadCardComponent {

    @Input() lead!: Lead;
  
    expanded = false;
    editMode = false;
  
    toggle() {
      this.expanded = !this.expanded;
    }
  
    collapse() {
      this.expanded = false;
    }
  
    exitEdit() {
      this.editMode = false;
    }
  
    isValid(): boolean {
      return this.lead.name.trim().length > 0;
    }
  
    scrollIntoView() {
      document
        .getElementById(`lead-${this.lead.id}`)
        ?.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
