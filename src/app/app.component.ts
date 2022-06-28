import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from "@angular/common";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router, private scroller: ViewportScroller) {
  }


  goToAboutUs() {
    // this.router.navigate(['/', 'aboutUs']);
    // this.scroller.scrollToAnchor("targetAbout")
    document.getElementById("targetAbout")?.scrollIntoView({
      behavior: "smooth"
    })
  }
  goToHome() {
    document.getElementById("targetHome")?.scrollIntoView({
      behavior: "smooth"
    })
  }
  goToProjects() {
    document.getElementById("targetProjects")?.scrollIntoView({
      behavior: "smooth"
    })
  }

}
