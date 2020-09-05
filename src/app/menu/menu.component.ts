import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  public currentActive = 0;
  public aboutOffset = null;
  public educationOffset = null;
  public experienceOffset = null;
  public workOffset = null;

  class = 'about';
  date = new Date().getFullYear();

  user = {
    name: 'Luis Ribeiro',
    position: 'Software Developer',
    location: 'from Portugal',
    avatar: 'https://avatars1.githubusercontent.com/u/4492981'
  };

  menuItems = [
    {
      name: 'About',
      id: 'about',
    },
    {
      name: 'Education',
      id: 'education',
    },
    {
      name: 'Experience',
      id: 'experience',
    },
    {
      name: 'Recent Work',
      id: 'work',
    }
  ];

  ngOnInit(): void {
    this.aboutOffset = document.getElementById('about').offsetTop;
    this.educationOffset = document.getElementById('education').offsetTop;
    this.experienceOffset = document.getElementById('experience').offsetTop;
    this.workOffset = document.getElementById('work').offsetTop;
  }

@HostListener('window:scroll', ['$event'])
  checkOffsetTop(): void {
    const pageYOffset = window.pageYOffset;
    if (pageYOffset >= this.aboutOffset && pageYOffset < this.educationOffset) {
      this.class = 'about';
    } else if (pageYOffset >= this.educationOffset && pageYOffset < this.experienceOffset) {
      this.class = 'education';
    } else if (pageYOffset >= this.experienceOffset && pageYOffset < this.workOffset) {
      this.class = 'experience';
    } else if (pageYOffset >= this.workOffset) {
      this.class = 'work';
    } else {
      this.class = 'about';
    }
  }

  constructor() { }

  scroll(e: any, id: string): void {
    e.preventDefault();

    this.class = id;
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
  }

}
