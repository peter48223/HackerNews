import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HackernewsService } from './hackernews.service';
import { Story } from './story';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'HackerNews';
  stories: Story[];

  constructor(private newsService: HackernewsService) { }

  ngOnInit() {
    this.getNews();
    console.log('stories', this.stories);
  }
  
  getNews(): void {
    this.newsService.getHackerNews()
    .subscribe(stories => this.stories = stories);
  }

}


