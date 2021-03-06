import {Component} from '@angular/core';

// 组件是 Angular 应用中的基本构造块。 它们在屏幕上显示数据，监听用户输入，并且根据这些输入执行相应的动作。

// app.component.ts— 组件的类代码，这是用 TypeScript 写的。

// app.component.html— 组件的模板，这是用 HTML 写的。

// app.component.css— 组件的私有 CSS 样式。

/**
 * 主组件
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularDemo';
}
