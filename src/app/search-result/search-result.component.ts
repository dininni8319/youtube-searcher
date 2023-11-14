import { 
 Component, 
 Input,
 OnInit
} from '@angular/core';
import { SearchResultModel } from '../searchresult.model';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})

export class SearchResultComponent implements OnInit {
  @Input() result: SearchResultModel | undefined

  constructor() {}

  ngOnInit(): void {
  }
}
