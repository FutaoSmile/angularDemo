import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';

/**
 * 配置路由
 */
const routes: Routes = [
  {path: 'heroes', component: HeroesComponent}

];

@NgModule({
  // 你必须首先初始化路由器，并让它开始监听浏览器中的地址变化。
  // 这个方法之所以叫 forRoot()，是因为你要在应用的顶级配置这个路由器。 forRoot() 方法会提供路由所需的服务提供商和指令，还会基于浏览器的当前 URL 执行首次导航。
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

