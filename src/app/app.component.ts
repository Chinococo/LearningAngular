import {Component, OnInit} from '@angular/core';
import {bootstrapApplication, Title} from '@angular/platform-browser';
declare var $: any;
declare var bootstrap:any;
@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private titleService: Title) {}
  title:any = "LearningAngular";
    ngOnInit(): void {
      //元件初始化要加載的物件
      this.titleService.setTitle(this.title);
      var myModal = new bootstrap.Modal(document.getElementById('modal'));
      $("#SubmitButton").click(()=>{
        ///alert("Hello World!");
        console.log("Hello World!");
        myModal.show();
      });
    }

}
