import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  tags: Tag[] = [
    {name: 'ASP.NET'},
    {name: 'Blazor'},
    {name: 'Angular'},
    {name: 'MongoDB'},
    {name: 'TypeScript'},
    {name: 'Material Design'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
