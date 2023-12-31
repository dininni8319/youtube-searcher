import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.development";
import { SearchResultModel } from "./searchresult.model";
import { 
  map
} from 'rxjs/operators';

export const YOUTUBE_API_KEY = environment.apiKey
export const YOUTUBE_API_URL = environment.apiUrl

@Injectable()
export class YouTubeSearchService {
  constructor(
    private http: HttpClient,
  ) {}

  search(query: string): Observable<SearchResultModel[]>{
    const params: string  = [
      `q=${query}`,
      `key=${YOUTUBE_API_KEY}`,
      `part=snippet`,
      `type=video`,
      `maxResults=10`
    ].join('&')
    
    const queryUrl = `${YOUTUBE_API_URL}?${params}`
    return this.http.get(queryUrl).pipe(
      map((response: any) => {
        return <any>response['items'].map((item: any) => {
          
          console.log("raw item", item); // uncomment if you want to debug
          return new SearchResultModel({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnailUrl: item.snippet.thumbnails.high.url
          })
        }) 
      })
    )
  }
}