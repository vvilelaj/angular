import { NgModule } from '@angular/core';
import { ErrorComponent, NotFoundComponent } from '.';

@NgModule({
  imports: [
  ],
  declarations: [
    NotFoundComponent,
    ErrorComponent
  ],
  exports: [
    NotFoundComponent,
    ErrorComponent
  ]
})
export class SharedModule { }
