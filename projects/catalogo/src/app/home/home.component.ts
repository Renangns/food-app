import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Home } from './home';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  home$: Observable<Home>;
  constructor(private service: HomeService) {
    this.home$ = service.getHomeInfos();
  }

  ngOnInit(): void {}
}
