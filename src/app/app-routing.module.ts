import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/new-student/new-student.module').then( m => m.NewStudentPageModule)
  },
  {
    path: 'new-student',
    loadChildren: () => import('./pages/new-student/new-student.module').then( m => m.NewStudentPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
