import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchText: string = '';
  posts: string[] = [
    "cats are cute",
    "dogs are loyal"
  ];
  matchingPostsCount: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onSearch(event: Event): void
  {
    const input = event.target as HTMLInputElement;
    this.searchText = input.value.trim().toLowerCase();
    if( this.searchText === '')
    {
      this.matchingPostsCount = 0;
      return;
    }
    const text = this.searchText.toLowerCase();

    this.matchingPostsCount =  this.posts.filter(post => post.toLowerCase().includes(this.searchText)).length;
  }

}
