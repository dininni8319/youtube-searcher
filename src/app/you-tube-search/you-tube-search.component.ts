import { Component } from '@angular/core';
import { SearchResultModel } from '../searchresult.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-you-tube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.css']
})
export class YouTubeSearchComponent {
  loading: boolean = false
  results: SearchResultModel[] | null = null
  data = null

  constructor(
    private http: HttpClient
  ) {}

  updateResults(results: SearchResultModel[]) {
    this.results = results
    console.log("results:", this.results); // uncomment to take a look
  }

  makePost(): void {
    this.loading = true 
    this.http.post(
      "https://jsonplaceholder.typicode.com/posts",
      JSON.stringify({
        title: "foo",
        body: "bar",
        userId: 1
      })
    ).subscribe((data: any) => {
        console.log('====================================');
        console.log(data);
        console.log('====================================');
       this.data = data 
       this.loading = false
    })
  }

  makeDelete() {
    this.loading = true
    this.http.delete(
      'https://jsonplaceholder.typicode.com/posts/1'
    )
    .subscribe((data: any) => {
      this.data = data 
      this.loading = false
    })
    
  }
}
