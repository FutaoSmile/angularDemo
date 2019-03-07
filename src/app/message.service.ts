import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() {
  }

  message: string[] = [];

  /**
   * 添加
   * @param message 数据
   */
  add(message: string) {
    this.message.push(message);
  }

  /**
   * 清空
   */
  clear() {
    this.message = [];
  }
}
