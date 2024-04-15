import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'job', loadChildren:()=> import('./job/job.module').then(m=> m.JobModule)}
];
