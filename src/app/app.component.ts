import {Component, OnInit} from '@angular/core';
import {bootstrapApplication, Title} from '@angular/platform-browser';
import { CommonModule } from '@angular/common'; // 确保导入 CommonModule
import $ from 'jquery';
import { Modal as BootstrapModal } from 'bootstrap';
import "utils/todoListItem"
import {addTask, todoLists} from './utils/todoListItem';
@Component({
  selector: 'app-root',
  imports: [CommonModule], // 添加 CommonModule
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private titleService: Title) {}
  title:any = "LearningAngular";
    ngOnInit(): void {
      //元件初始化要加載的物件
      this.titleService.setTitle(this.title);

      // 初始化 Bootstrap 模态框
      const modalElement = document.getElementById('modal');
      if (modalElement) {
        const myModal = new BootstrapModal(modalElement);
        // 使用 jQuery 为按钮绑定事件
        $('#SubmitButton').on('click', () => {
          const value: string = $("#TodoDataInput").val() as string;
          addTask(value)

          //myModal.show(); // 显示模态框
        });
      }
    }

  protected readonly todoLists = todoLists;
}
