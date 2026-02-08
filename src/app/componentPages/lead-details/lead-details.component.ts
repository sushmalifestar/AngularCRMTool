import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Lead } from '../../models/leads.model';
import { LeadsService } from '../../services/leads.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-lead-details',
  standalone: true,
  imports: [NgIf],
  templateUrl: './lead-details.component.html',
  styleUrl: './lead-details.component.css'
})
export class LeadDetailsComponent implements OnInit{

  leadId!: number;
  lead?: Lead;

  constructor(
    private route: ActivatedRoute,
    private leadsService: LeadsService
  ) {}

  ngOnInit() {
    this.leadId = Number(this.route.snapshot.paramMap.get('id'));
    this.lead = this.leadsService.getLeads()
      .find(l => l.id === this.leadId);
  }
}
