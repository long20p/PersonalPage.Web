import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {

  article: Article;
  error: string;

  constructor(private route: ActivatedRoute, private articleService: ArticlesService) { 
  }

  ngOnInit() {
    const articleId = this.route.snapshot.paramMap.get('articleId');
    if (articleId) {
      this.articleService.getArticle(articleId).subscribe(
        article => {
          console.log(article);
          this.article = article;
        },
        error => this.error = <any>error);
    }
  }


  /* onBack(): void {
    this.router.navigate(['/products']);
  } */

}
