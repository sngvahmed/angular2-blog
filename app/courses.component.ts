import {Component} from 'angular2/core'
import {CoursesService} from './courses.service'

@Component({
    selector : 'courses',
    template : `
               <h1>{{title}}</h1>
               <ul>
                <li *ngFor="#name of names"> {{name}}</li>
               </ul>
              `,
    providers : [CoursesService]
})
export class CoursesComponent{
    title:string = "Fisrt angular 2 application ";
    names:string[];

    constructor(coursesService : CoursesService){
        this.names = coursesService.getName(); 
    }
}