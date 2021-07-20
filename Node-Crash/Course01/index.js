const { odd, even } = require("./var");
const checkNum = require("./func");

function checkStringOddOrEven(str) {
  if (str.length % 2) {
    return odd;
  }
  return even;
}

console.log(checkNum(10));
console.log(checkStringOddOrEven("hello"));

/*
 많은 파일에 걸쳐 재 사용되는 함수나 변수를 모듈로 만들어 두면 편리하다. 

 모듈이 많아지고, 모듈간의 관계가 얽히면, 구조를 파악하기 어렵다는 단점 존재,

 노드는 대부분의 파일이 다른 파일을 모듈로 사용하고 있으므로, 모듈 파악 중요 ! 
*/
