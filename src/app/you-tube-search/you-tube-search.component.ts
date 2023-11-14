import { Component } from '@angular/core';
import { SearchResultModel } from '../searchresult.model';

@Component({
  selector: 'app-you-tube-search',
  templateUrl: './you-tube-search.component.html',
  styleUrls: ['./you-tube-search.component.css']
})
export class YouTubeSearchComponent {
  loading: boolean = false
  results: SearchResultModel[] | null = null

  // create an array of results with SearchResultModel
  // results: SearchResultModel[] = [
  //   {
  //     id: '1',
  //     title: 'Title 1',
  //     description: 'Description 1',
  //     thumbnailUrl: '',
  //     videoUrl: ''
  //   },
  //   {
  //     id: '2',
  //     title: 'Title 2',
  //     description: 'Description 2',
  //     thumbnailUrl: '',
  //     videoUrl: ''
  //   },
  //   {
  //     id: '3',
  //     title: 'Title 3',
  //     description: 'Description 3',
  //     thumbnailUrl: '',
  //     videoUrl: ''
  //   }
  // ]

  updateResults(results: SearchResultModel[]) {
    this.results = results
    console.log("results:", this.results); // uncomment to take a look
  }
}
