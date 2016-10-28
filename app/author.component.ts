import {Component} from 'angular2/core';
import {AuthorService} from './author.service'; 

@Component({
    selector : 'author',
    template : `<ul> <li *ngFor = "#author of authors">{{author}}</li> </ul>`,
    providers : [AuthorService]
})
export class AuthorComponent{
    authors : string[];

    constructor(authorService : AuthorService){
        this.authors = authorService.getAuthors();
    }

}