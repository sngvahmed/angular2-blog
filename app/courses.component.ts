import {Component} from 'angular2/core'
import {CoursesService} from './courses.service'
import {AutoGrowDirective} from './auto-grow.directive'

@Component({
    selector : 'courses',
    template : `
               <h1>{{title}}</h1>
               <input type="text" autoGrow />
               <ul>
                <li *ngFor="#name of names"> {{name}}</li>
               </ul>
              `,
    providers : [CoursesService],
    directives : [AutoGrowDirective]
})
export class CoursesComponent{
    title:string = "Fisrt angular 2 application ";
    names:string[];

    constructor(coursesService : CoursesService){
        this.names = coursesService.getName(); 
    }
}