import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Home } from './home';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor() {}

  getHomeInfos(): Observable<Home> {
    return of({
      banner: 'https://loremflickr.com/1980/600',
      logo: 'https://www.logaster.com.br/blog/wp-content/uploads/sites/6/2019/03/0102_t_sushi-house-logo_6.png',
      brandName: 'Sushi House',
      brandDescription: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the`,
      socialMedias: {
        instagram: 'https://instagram.com',
        facebook: 'https://www.facebook.com',
        whatsapp: 'https://whatsapp.com',
      },
    });
  }
}
