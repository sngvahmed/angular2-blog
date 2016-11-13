import {Component} from 'angular2/core'
import {CoursesService} from './courses.service'
import {AutoGrowDirective} from '../common/auto-grow.directive'

@Component({
    selector: 'courses',
    template: `
               <h1>{{title}}</h1>
               <input type="text" autoGrow />
               <ul>
                <li *ngFor="#name of names"> {{name}}</li>
               </ul>
              `,
    providers: [CoursesService],
    directives: [AutoGrowDirective]
})
export class CoursesComponent implements OnInit {
    title: string;
    names: string[];

    ngOnInit() {
        this.title = "Fisrt angular 2 application ";
    }

    constructor(coursesService: CoursesService) {
        this.names = coursesService.getName();
    }
}