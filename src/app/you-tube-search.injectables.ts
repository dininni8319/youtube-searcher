import { YouTubeSearchService } from './you-tube-search.service';

export const youTubeSearchInjectables: Array<any> = [
  { provide: YouTubeSearchService, useClass: YouTubeSearchService },
]
