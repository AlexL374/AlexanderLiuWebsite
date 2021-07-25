import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(function() {
      var nameElements = document.getElementsByClassName("name");
        (<HTMLParagraphElement>nameElements[0]).style.top = "0%";
        (<HTMLParagraphElement>nameElements[0]).style.visibility = "visible";
        (<HTMLParagraphElement>nameElements[0]).style.opacity = "1";
  }, 200);
  setTimeout(function() {
    var nameElements = document.getElementsByClassName("name");
    (<HTMLParagraphElement>nameElements[1]).style.top = "0%";
    (<HTMLParagraphElement>nameElements[1]).style.visibility = "visible";
    (<HTMLParagraphElement>nameElements[1]).style.opacity = "1";
  }, 400)
  setTimeout(function() {
    var nameElements = document.getElementsByClassName("name");
    (<HTMLParagraphElement>nameElements[2]).style.top = "0%";
    (<HTMLParagraphElement>nameElements[2]).style.visibility = "visible";
    (<HTMLParagraphElement>nameElements[2]).style.opacity = "1";
  }, 600)
  setTimeout(function() {
    var nameElements = document.getElementsByClassName("name");
    (<HTMLParagraphElement>nameElements[3]).style.top = "0%";
    (<HTMLParagraphElement>nameElements[3]).style.visibility = "visible";
    (<HTMLParagraphElement>nameElements[3]).style.opacity = "1";
  }, 800)
  setTimeout(function() {
    var nameElements = document.getElementsByClassName("name");
    (<HTMLParagraphElement>nameElements[4]).style.top = "0%";
    (<HTMLParagraphElement>nameElements[4]).style.visibility = "visible";
    (<HTMLParagraphElement>nameElements[4]).style.opacity = "1";
  }, 1000)
  setTimeout(function() {
    var nameElements = document.getElementsByClassName("name");
    (<HTMLParagraphElement>nameElements[5]).style.top = "0%";
    (<HTMLParagraphElement>nameElements[5]).style.visibility = "visible";
    (<HTMLParagraphElement>nameElements[5]).style.opacity = "1";
  }, 1200)
  setTimeout(function() {
    var nameElements = document.getElementsByClassName("name");
    (<HTMLParagraphElement>nameElements[6]).style.top = "0%";
    (<HTMLParagraphElement>nameElements[6]).style.visibility = "visible";
    (<HTMLParagraphElement>nameElements[6]).style.opacity = "1";
  }, 1400)
  setTimeout(function() {
    var nameElements = document.getElementsByClassName("name");
    (<HTMLParagraphElement>nameElements[7]).style.top = "0%";
    (<HTMLParagraphElement>nameElements[7]).style.visibility = "visible";
    (<HTMLParagraphElement>nameElements[7]).style.opacity = "1";
  }, 1600)
  setTimeout(function() {
    var nameElements = document.getElementsByClassName("name");
    (<HTMLParagraphElement>nameElements[8]).style.top = "0%";
    (<HTMLParagraphElement>nameElements[8]).style.visibility = "visible";
    (<HTMLParagraphElement>nameElements[8]).style.opacity = "1";
  }, 1800)
  setTimeout(function() {
    var nameElements = document.getElementsByClassName("name");
    (<HTMLParagraphElement>nameElements[9]).style.top = "0%";
    (<HTMLParagraphElement>nameElements[9]).style.visibility = "visible";
    (<HTMLParagraphElement>nameElements[9]).style.opacity = "1";
  }, 2000)
  setTimeout(function() {
    var nameElements = document.getElementsByClassName("name");
    (<HTMLParagraphElement>nameElements[10]).style.top = "0%";
    (<HTMLParagraphElement>nameElements[10]).style.visibility = "visible";
    (<HTMLParagraphElement>nameElements[10]).style.opacity = "1";
  }, 2200)
  setTimeout(function() {
    var nameElements = document.getElementsByClassName("name");
    (<HTMLParagraphElement>nameElements[11]).style.top = "0%";
    (<HTMLParagraphElement>nameElements[11]).style.visibility = "visible";
    (<HTMLParagraphElement>nameElements[11]).style.opacity = "1";
  }, 2400)
  }

  resumeButton() {
    var visibilityOption = (<HTMLElement>document.getElementById("resume-pdf")).style.visibility;
    if (visibilityOption == "hidden" || visibilityOption == "") {
      (<HTMLElement>document.getElementById("resume-pdf")).style.visibility = "visible";
      (<HTMLElement>document.getElementById("resume-pdf")).style.opacity = "1";
      (<HTMLElement>document.getElementById("resume-pdf")).style.height = "100vh";
    }
    else {
      (<HTMLElement>document.getElementById("resume-pdf")).style.visibility = "hidden";
      (<HTMLElement>document.getElementById("resume-pdf")).style.opacity = "0";
      (<HTMLElement>document.getElementById("resume-pdf")).style.height = "0vh";
    }
  }

}
