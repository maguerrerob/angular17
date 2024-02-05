import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor( private router:Router){}

    changeRoute(evt: MouseEvent, name: string) {
      evt.preventDefault();
  
      let navcfg = [{ outlets: { secondary: name } }];
  
      this.router.navigate(navcfg, {
        skipLocationChange: false,
      });
    }
}
