import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClientModule) { }

  projects: any = [
    {
      id: 1,
      title: 'PersonalGalApp',
      description: 'A personal gallery application that you display your photos for others to see.',
      livedemo: 'https://galleryapp-wk1.herokuapp.com/',
      imgUrl: 'assets/images/gallery.png',
      Tech: 'Python, Django'
    },

    {
      id: 2,
      title: 'AwesomePizza',
      description: 'A website where you can order some delicious Pizza',
      livedemo: 'https://gakur.github.io/AwesomePizza-/',
      imgUrl: 'assets/images/pizza.png',
      Tech: 'Html,CSS, Javascript'
    },

    {
      id: 3,
      title: 'DelaniStudio',
      description: 'A complete website for our Delani Studio designed for a client',
      livedemo: 'https://gakur.github.io/delanistudio/',
      imgUrl: 'assets/images/delani.png',
      Tech: 'HTML, CSS and Javascript'
    },

    {
      id: 4,
      title: 'PersonalBlog',
      description: 'This is a personal blogging website where you can create and share your opinions and other users can read and comment on them.',
      livedemo: 'https://blogsquote-wk4.herokuapp.com/',
      imgUrl: '',
      Tech: 'Python/Flask'
    },

    {
      id: 5,
      title: 'Instagram',
      description: 'This is a clone of Instagram website where people share their images and videos for other users to view.',
      livedemo: 'https://instaclone-wk2.herokuapp.com/',
      imgUrl: 'assets/images/photo.png',
      Tech: 'Django/Python'
    },

    {
      id: 6,
      title: 'NeiApp',
      description: 'This is a web application that allows you to be in the loop about everything happening in your neighborhood.',
      livedemo: 'https://neighbourhood-7.herokuapp.com/all-hoods/',
      imgUrl: 'assets/images/nei.png',
      Tech: 'Django and Python'
    },
  ]
  about2 = `Software Developer with a great touch to code.
  Worked with Software Development Life Cycle(SDLC) and  agile methodologies .
  Majoring in Angular, Javascript, Html and Bootstrap for front-end designs.
  And Flask , Django for back-end.Also have a good understanding of:
  Psql Databases, MySQL, Firebase,Python and Jquery`

  about = "Fell in love with errors.I like debugging and solving errors."
  resumeurl = "https://drive.google.com/file/d/11lp9-JEqL8vT7Qd0T_EC4zhJSVN_BP0V/view?usp=sharing"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'ANGULAR',
      'progress': '70%'
    },
    {
      'id': '2',
      'skill': 'PYTHON, JAVA',
      'progress': '80%'
    },
    {
      'id': '3',
      'skill': 'JAVASCRIPT, JQUERY',
      'progress': '65%'
    },
    {
      'id': '4',
      'skill': 'HTML, CSS',
      'progress': '70%'
    },
    {
      'id': '5',
      'skill': 'FLASK',
      'progress': '60%'
    },
    {
      'id': '6',
      'skill': 'DJANGO',
      'progress': '70%'
    },
  ]

  skills(): Observable<any> {
    return this.skillsData
  }

  getProjects(): Observable <any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
}
