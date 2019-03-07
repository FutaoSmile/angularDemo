// 从 Angular 核心库中导入 Component 符号
import {Component, OnInit} from '@angular/core';
// 导入一个类
// import {Hero} from '../Hero';

import {HeroList} from '../HeroList';
import {HeroService} from '../hero.service';
import {Hero} from '../Hero';
import {Observable} from 'rxjs';

/**
 * 英雄列表组件
 * 为组件类加上 @Component 装饰器
 * 用于为该组件指定 Angular 所需的元数据
 */
@Component({
  // selector— 组件的选择器（CSS 元素选择器）用来在父组件的模板中匹配 HTML 元素的名称，以识别出该组件
  selector: 'app-heroes',
  // templateUrl— 组件模板文件的位置。
  templateUrl: './heroes.component.html',
  // styleUrls— 组件私有 CSS 样式表文件的位置。
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  /**
   * 这个参数同时做了两件事：1. 声明了一个私有 heroService 属性，2. 把它标记为一个 HeroService 的注入点。
   *
   * 当 Angular 创建 HeroesComponent 时，依赖注入系统就会把这个 heroService 参数设置为 HeroService 的单例对象。
   *
   * @param heroService 服务
   */
  constructor(private heroService: HeroService) {
  }


  hero: Hero = {
    id: 1,
    name: '风暴英雄laoK'
  };
  heroList: Hero[];

  /**
   * 当前被选中的英雄
   */
  selectedHero: Hero;

  /**
   * 当英雄被选中
   * @param hero  被选中的英雄对象
   */
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

  /**
   * 调用heroService服务的方法来获取英雄列表(方法定义必须放在数据定义之后)
   *     订阅方法
   */
  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroList => this.heroList = heroList);
  }

  /**
   * ngOnInit 是一个生命周期钩子，Angular 在创建完组件后很快就会调用 ngOnInit。这里是放置初始化逻辑的好地方
   */
  ngOnInit() {
    this.getHeroes();
  }


}
