import { Component, Input } from '@angular/core';
import { Lead } from '../../models/leads.model';
import { NgClass, NgFor } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-lead-list',
  standalone: true,
  imports: [NgClass,RouterModule, NgFor],
  templateUrl: './lead-list.component.html',
  styleUrl: './lead-list.component.css'
})
export class LeadListComponent {

  @Input() leads: Lead[] = [];
  customColor: string = 'green';

}
