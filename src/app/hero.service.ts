import {Injectable} from '@angular/core';
import {Hero} from './Hero';
import {HeroList} from './HeroList';
/**
 * 该应用就要从远端服务器获取英雄数据了，而那天生就是异步操作。
 *
 * HeroService 必须等服务器给出响应， 而 getHeroes() 不能立即返回英雄数据， 浏览器也不会在该服务等待期间停止响应。
 *
 * HeroService.getHeroes() 必须具有某种形式的异步函数签名。
 *
 * 它可以使用回调函数，可以返回 Promise（承诺），也可以返回 Observable（可观察对象）。
 *
 * 这节课，HeroService.getHeroes() 将会返回 Observable，因为它最终会使用 Angular 的 HttpClient.get 方法来获取英雄数据，而 HttpClient.get() 会返回 Observable。
 */
import {Observable, of} from 'rxjs';

import {MessageService} from './message.service';

/**
 * 在要求 Angular 把 HeroService 注入到 HeroesComponent 之前，你必须先把这个服务提供给依赖注入系统
 *
 * 你需要确保 HeroService 已经作为该服务的提供商进行过注册。 你要用一个注入器注册它。注入器就是一个对象，负责在需要时选取和注入该提供商。
 *
 * 默认情况下，Angular CLI 命令 ng generate service 会通过给 @Injectable 装饰器添加元数据的形式，用根注入器将你的服务注册成为提供商。
 *
 * 如果你看看 HeroService 紧前面的 @Injectable() 语句定义，就会发现 providedIn 元数据的值是 'root'：
 */
@Injectable({
  // 当你在顶层提供该服务时，Angular 就会为 HeroService 创建一个单一的、共享的实例，并把它注入到任何想要它的类上。
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) {
  }


  /**
   * 获取英雄列表
   */
  getHeroes(): Observable<Hero[]> {
    // 在获取到英雄数组时发送一条消息
    this.messageService.add('HeroService: fetched heroes');
    return of(HeroList);
  }

}
