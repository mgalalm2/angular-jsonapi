import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  public beersList: any [];
  public requestError: any;
  constructor(private articles: ArticlesService) { }

  ngOnInit() {
    this.getBeers();
  }
  public getBeers() {
    return this.articles.get(10, 0).subscribe(
      response => this.handleResponse(response), 
      error => this.handleError(error)
    );
  }
  protected handleResponse (response: any) {
    this.requestError = null;
    return this.beersList = response.data || {};
  }
  protected handleError (error: any) 
  {
    return this.requestError = error;
  }
}
