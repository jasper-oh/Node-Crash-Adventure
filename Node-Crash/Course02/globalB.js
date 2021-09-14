const A = require("./globalA");

// -> 집에서 확인을 해봐야 겠다 !!! 이게 어떻게 변동이 됬는지 확인을 해보자

// import A from "./globalA";

global.message = "Hello";

console.log(A());
