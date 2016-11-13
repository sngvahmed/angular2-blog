import {Component} from '@angular/core';
import {AuthorService} from './author.service';
import {OnMouseHoverDirective} from './mousehover.directive';

@Component({
    selector : 'author',
    template : `<ul> <li *ngFor = "#author of authors" onMouseHoverDirective>{{author}}</li> </ul>`,
    providers : [AuthorService],
    directives : [OnMouseHoverDirective]
})
export class AuthorComponent{
    authors : string[];

    constructor(authorService : AuthorService){
        this.authors = authorService.getAuthors();
    }

}
