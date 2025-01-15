import {Component, OnInit} from '@angular/core';
import { Title } from '@angular/platform-browser';
declare var $: any;

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private titleService: Title) {}
  ngOnInit(): void {
    //元件初始化要加載的物件
    var title = 'LearningAngularTest';
    this.titleService.setTitle(title);
    $("#SubmitButton").click(()=>{
      alert("Hello World!");
      console.log("Hello World!");
    });
  }

}
