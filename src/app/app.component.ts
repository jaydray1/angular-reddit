import { Component } from '@angular/core';
import { Article } from '../app/article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[];

  constructor() {
    this.articles = [
      new Article('Angular 2', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fullstack.io', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
      new Article('React', 'https://reactjs.org/'),
      new Article('Ember', 'https://www.emberjs.com/', 44),
      new Article('Vue', 'https://www.vuejs.org/', 49932),
    ];
  }
  

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and atricle link ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }
}
