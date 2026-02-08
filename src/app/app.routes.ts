import { Routes } from '@angular/router';
import { DashboardComponent } from './componentPages/dashboard/dashboard.component';
import { LeadsComponent } from './componentPages/leads/leads.component';
import { AddLeadComponent } from './componentPages/add-lead/add-lead.component';
import { LeadDetailsComponent } from './componentPages/lead-details/lead-details.component';

export const routes: Routes = [
    {path:'', redirectTo:'dashboard', pathMatch:'full'},
    {path:'dashboard', component:DashboardComponent},
    {path:'leads', component:LeadsComponent},
    {path:'leads/:id', component:LeadDetailsComponent},
    {path:'add-lead', component:AddLeadComponent}
];
