/*
  读取userTempId
*/
import { v4 as uuidv4 } from "uuid";

/*
  整体流程：
		- 先读取本地localStorage数据，看是否有userTempId
		- 如果有，直接使用
		- 如果没有，需要创建userTempId，同时保存在localStorage中
*/

// class UserTempId {
//   constructor() {
//     this.userTempId = this.getUserTempId();
//   }
//   function getUserTempId() {
//     let userTempId = localStorage.getItem("userTempId");
//     if (userTempId) {
//       return userTempId;
//     }
//     userTempId = uuidv4();
//     localStorage.setItem("userTempId", userTempId);
//     return userTempId;
//   }
// }

function getUserTempId() {
    let userTempId = localStorage.getItem("userTempId"); //第一次先读取看看有没有值

    if (userTempId) {
        return userTempId; //有直接把userId传出去
    }

    userTempId = uuidv4(); //这就是一个字符串赋值

    localStorage.setItem("userTempId", userTempId); //设置localstorage key和value值

    return userTempId; //return出去
}

export default getUserTempId;