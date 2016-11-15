import {Component , Injectable} from '@angular/core';

export interface HeaderItem{
    iconPath : string;
    name : string;
    url : string;
}

@Component({
    selector: 'admin-header',
    templateUrl : 'app/header/header.component.html',
    styleUrls : ['src/css/header/header.component.css']
})
export class HeaderComponent {

    headerItem : HeaderItem[] = [
        {"name" : "Home" , "iconPath" : "src/img/common/icon/home.svg" , "url" : "/home"},
        {"name" : "projects" , "iconPath" : "src/img/common/icon/home.svg" , "url" : "/projects"},
        {"name" : "Home" , "iconPath" : "src/img/common/icon/home.svg" , "url" : "/home"}
    ];
}
