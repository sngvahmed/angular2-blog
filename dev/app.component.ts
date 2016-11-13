import {Component} from 'angular2/core';
import {CoursesComponent} from './courses/courses.component';
import {AuthorComponent} from './author/author.component';

@Component({
    selector: 'my-app',
    template: `
        <h1 [style.color] = "inputElement.value ==='yes' ? 'red' : ''">Hello Ahmed</h1>
        <button [disabled] = "inputElement.value !== 'yes'" >Only when Yes value</button>
        <h2 [class.is-awesome] = "inputElement.value==='yes'">Hello Ahmed</h2>
        <input type="text" #inputElement (keyup) = "0"/>  <courses></courses><author></author>
    `,
    directives: [CoursesComponent , AuthorComponent]
})
export class AppComponent { }
