import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Lead } from '../../models/leads.model';
import { LeadsService } from '../../services/leads.service';
import { FormsModule } from '@angular/forms';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LeadListComponent } from '../lead-list/lead-list.component';
import { LeadSearchComponent } from '../lead-search/lead-search.component';
import { LeadCardComponent } from '../lead-card/lead-card.component';

@Component({
  selector: 'app-leads',
  standalone: true,
  imports: [NgIf, FormsModule, NgFor, NgClass, LeadSearchComponent, LeadListComponent, LeadCardComponent],
  templateUrl: './leads.component.html',
  styleUrl: './leads.component.css'
})
export class LeadsComponent implements AfterViewInit {

  searchTextFromChild: string = '';
  leads: Lead[] = [];
  filteredLeads: Lead[] = [];
  viewMode: 'list' | 'card' = 'list';


  @ViewChild(LeadSearchComponent)
  leadSearchComponent!: LeadSearchComponent;

  @ViewChildren(LeadCardComponent)
  leadCards!: QueryList<LeadCardComponent>;


  constructor(private leadsService: LeadsService) { }

  ngOnInit() {
    this.leads = this.leadsService.getLeads();
    this.filteredLeads = this.leads;
  }

  ngAfterViewInit() {
    // safe to use leadSearchComponent here
  }

  onSearchTextChange(value: string) {
    this.searchTextFromChild = value;

    this.filteredLeads = this.leads.filter(lead =>
      lead.name.toLowerCase().includes(value.toLowerCase()) ||
      lead.stage.toLowerCase().includes(value.toLowerCase())
    );
  }

  resetSearchFromParent() {
    this.leadSearchComponent.resetSearch();
  }

  collapseAll() {
    console.log("collapse all button is clicked...")
    this.leadCards.forEach(card => card.collapse());
  }

  submit() {
    console.log("submit button is clicked...")
    const firstInvalid = this.leadCards.find(card => !card.isValid());

    if (firstInvalid) {
      firstInvalid.scrollIntoView();
      return;
    }

    console.log('All cards valid → submit');
  }

  showListView() {
    this.viewMode = 'list';
  }
  
  showCardView() {
    this.viewMode = 'card';
  }
  

}
