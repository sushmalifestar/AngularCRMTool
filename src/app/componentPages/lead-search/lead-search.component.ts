import { NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lead-search',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './lead-search.component.html',
  styleUrl: './lead-search.component.css'
})
export class LeadSearchComponent {

searchText:string='';
@Output()
  searchChanged = new EventEmitter<string>();

onSearchChange(){
  this.searchChanged.emit(this.searchText);
}

resetSearch() {
  this.searchText = '';
  this.searchChanged.emit('');
}

}
