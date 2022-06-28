import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewportScroller } from "@angular/common";
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  targetA = document.getElementById("targetAbout");
  constructor(public router: Router, private scroller: ViewportScroller) { }

  ngOnInit(): void {
    console.log(this.targetA)
  }

  goToSkills() {
    document.getElementById("targetSkills")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  goToHome() {
    document.getElementById("targetHome")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  goToProjects() {
    document.getElementById("targetProjectsNew")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }

  goToContact() {
    document.getElementById("targetContact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }



}
