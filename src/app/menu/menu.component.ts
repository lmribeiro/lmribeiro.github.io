import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {
  class = 'about';
  date = new Date().getFullYear();

  my = {
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
      name: 'Featured Work',
      id: 'work',
    }
  ];

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkOffsetTop(): void {
    const aboutOffset = document.getElementById('about').offsetTop;
    const educationOffset = document.getElementById('education').offsetTop;
    const experienceOffset = document.getElementById('experience').offsetTop;
    const workOffset = document.getElementById('work').offsetTop;
    const pageYOffset = window.pageYOffset;

    if (pageYOffset >= aboutOffset && pageYOffset < educationOffset) {
      this.class = 'about';
    } else if (pageYOffset >= educationOffset && pageYOffset < experienceOffset) {
      this.class = 'education';
    } else if (pageYOffset >= experienceOffset && pageYOffset < workOffset) {
      this.class = 'experience';
    } else if (pageYOffset >= workOffset) {
      this.class = 'work';
    } else {
      this.class = 'about';
    }
  }

  constructor() {
  }

  scroll(e: any, id: string): void {
    e.preventDefault();
    this.class = id;
    document.getElementById(id).scrollIntoView({behavior: 'smooth'});
  }

}
