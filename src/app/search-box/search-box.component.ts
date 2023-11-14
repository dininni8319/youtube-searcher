import { 
  Component, 
  Output, 
  EventEmitter, 
  ElementRef, 
  OnInit 
} from '@angular/core';
import { fromEvent } from 'rxjs';
import { SearchResultModel } from '../searchresult.model';
import { YouTubeSearchService } from '../you-tube-search.service';
import { 
  map, 
  filter, 
  debounceTime, 
  tap, 
  switchAll
} from 'rxjs/operators';

@Component({
  selector: 'app-search-box',
  template: `
    <input type="text" class="form-control" placeholder="Search" autofocus>
  `,
  styleUrls: ['./search-box.component.css']
})

export class SearchBoxComponent implements OnInit {
  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>() 
  @Output() results: EventEmitter<SearchResultModel[]> = new EventEmitter<SearchResultModel[]>() 
  
  constructor(
    private youtube: YouTubeSearchService,
    private el: ElementRef
  ) {}

  ngOnInit(): void {
    // convert the `keyup` event into an observable stream
    // so we can debounce appropriately
    const obs = fromEvent(this.el.nativeElement, 'keyup')
      .pipe(
        map((e: any) => e.target.value), // extract the value of the input
        filter((text: string) => text.length > 1), // filter out if empty
        debounceTime(250), // only once every 250ms
        tap(() => this.loading.emit(true)), // enable loading
        map((query: string) => this.youtube.search(query)), // search
        switchAll() // act on the return of the search
      )
      .subscribe(
        (results: SearchResultModel[]) => {
          this.loading.emit(false)
          this.results.emit(results) // on success
        },
        (err: any) => {
          console.log(err)
          this.loading.emit(false) // on error
        },
        () => {
          this.loading.emit(false)  // on completition
        }
      )
      
     
  }
}
