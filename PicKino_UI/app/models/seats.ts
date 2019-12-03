import { RouterLinkWithHref } from '@angular/router'

export class Seats {
  constructor(
    public row: string,
    public column: number[],
    public count: number
    
  ) 
  {}
}
