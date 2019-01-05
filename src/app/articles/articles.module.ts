import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles.component';
import { ArticlesService } from './articles.service';

@NgModule({
  declarations: [ArticlesComponent],
  providers: [ArticlesService],
  imports: [
    CommonModule
  ]
})
export class ArticlesModule { }
