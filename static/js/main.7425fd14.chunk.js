(this.webpackJsonpcalculator=this.webpackJsonpcalculator||[]).push([[0],[,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return CalculatorContext}));var W_Work_Projects_React_Projects_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(2),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__),_GetHistory__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(7),_library_handleSessionStorage__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(8),_CreateInputButtons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(9),_CreateOprators__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(10),CalculatorContext=react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext();function Calculator(){var _useState=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState2=Object(W_Work_Projects_React_Projects_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState,2),inputValue=_useState2[0],setInputValue=_useState2[1],_useState3=Object(react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),_useState4=Object(W_Work_Projects_React_Projects_Calculator_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.a)(_useState3,2),result=_useState4[0],setResult=_useState4[1],resultRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),historyRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),stateRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(inputValue),answerRef=Object(react__WEBPACK_IMPORTED_MODULE_1__.useRef)(result);Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){return sessionStorage.setItem("calcHistory","[]"),window.addEventListener("keydown",handleKeyDown),function(){window.removeEventListener("keydown",handleKeyDown)}}),[]),Object(react__WEBPACK_IMPORTED_MODULE_1__.useEffect)((function(){stateRef.current=inputValue,answerRef.current=result}),[inputValue,result]);var handleChange=function(e){var t=e.target.value;isNotValidInput(t)||setInputValue(t)},isNotValidInput=function(e){return!!e.match(/[^\d\/\+\*\%\-\.]/g)||(!!e.match(/[\/\+\%\-\.]{2,}|[\*]{3,}|[\/\+\%\-\.]\*|\*[\/\+\%\-\.]|[\/\+\%\-\.\*\d]*\.{2,}[\/\+\%\-\.\*\d]/)||void 0)},handleClick=function(e){var t=e.target.closest("button").name;isNotValidInput(inputValue+t)||setInputValue((function(e){return e+t}))},evaluateTheResult=function evaluateTheResult(){try{var calcResult=eval(stateRef.current);if(isNaN(calcResult))throw new Error("Illegal input");var newHistoryObj={expression:stateRef.current,result:calcResult};Object(_library_handleSessionStorage__WEBPACK_IMPORTED_MODULE_3__.a)(newHistoryObj),setResult(calcResult),historyRef.current.lastChild.scrollIntoView({behaviour:"smooth"}),resultRef.current.classList.remove("warning")}catch(error){setResult("\ud83d\ude30".concat(error.message)),resultRef.current.classList.add("warning")}},handleBackspace=function(){return setInputValue((function(e){return e.slice(0,e.length-1)}))},handleCE=function(){return setInputValue("")},handleKeyDown=function(e){switch(e.key){case"Enter":return evaluateTheResult();default:return}};return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section",{id:"calculator"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CalculatorContext.Provider,{value:{inputValue:inputValue,setInputValue:setInputValue,result:result,setResult:setResult}},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1",null,"Nice Calculator"),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"mainContainer"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"calContainer"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input",{onChange:handleChange,value:inputValue}),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{ref:resultRef,className:"result"},result),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"buttonsContainer"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"operatorButtons"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CreateOprators__WEBPACK_IMPORTED_MODULE_5__.a,{handleClick:handleClick,evaluateTheResult:evaluateTheResult,handleBackspace:handleBackspace,handleCE:handleCE})),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{className:"inputButtons"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_CreateInputButtons__WEBPACK_IMPORTED_MODULE_4__.a,{handleClick:handleClick})))),react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div",{ref:historyRef,className:"history"},react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_GetHistory__WEBPACK_IMPORTED_MODULE_2__.a,null)))))}__webpack_exports__.b=Calculator},,,,function(e,t,a){"use strict";var _=a(11),n=a(2),r=a(0),l=a.n(r),c=a(3);t.a=function(){var e=Object(r.useContext)(c.a),t=e.setResult,a=e.setInputValue;sessionStorage.getItem("calcHistory")||sessionStorage.setItem("calcHistory","[]");var u=JSON.parse(sessionStorage.getItem("calcHistory"));if(u.length<1)return l.a.createElement("p",null,"No history");var s=function(e){var r=Object(_.a)(e.target.closest("p").children).map((function(e){return e.textContent})),l=Object(n.a)(r,2),c=l[0],u=l[1];a(c),t(u)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("h2",null,"History"),u.map((function(e,t){var a=e.expression,_=e.result;return l.a.createElement("p",{key:a+_+t,onClick:s},l.a.createElement("span",{className:"expression"},a),"=",l.a.createElement("span",{className:"result"},_))})))}},function(e,t,a){"use strict";t.a=function(e){sessionStorage.getItem("calcHistory")||sessionStorage.setItem("calcHistory","[]");var t=JSON.parse(sessionStorage.getItem("calcHistory")),a=t[t.length-1]||"",_="expression",n="result";e[_]===a[_]&&e[n]===a[n]||(t.push(e),sessionStorage.setItem("calcHistory",JSON.stringify(t)))}},function(e,t,a){"use strict";var _=a(0),n=a.n(_);t.a=function(e){var t=e.handleClick;return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{onClick:t,name:"1"},"1"),n.a.createElement("button",{onClick:t,name:"2"},"2"),n.a.createElement("button",{onClick:t,name:"3"},"3"),n.a.createElement("button",{onClick:t,name:"4"},"4"),n.a.createElement("button",{onClick:t,name:"5"},"5"),n.a.createElement("button",{onClick:t,name:"6"},"6"),n.a.createElement("button",{onClick:t,name:"7"},"7"),n.a.createElement("button",{onClick:t,name:"8"},"8"),n.a.createElement("button",{onClick:t,name:"9"},"9"),n.a.createElement("button",{onClick:t,name:"0"},"0"),n.a.createElement("button",{onClick:t,name:"00"},"00"),n.a.createElement("button",{onClick:t,name:"."},"."))}},function(e,t,a){"use strict";var _=a(0),n=a.n(_);t.a=function(e){var t=e.handleClick,a=e.evaluateTheResult,_=e.handleCE,r=e.handleBackspace;return n.a.createElement(n.a.Fragment,null,n.a.createElement("button",{onClick:_,name:"CE"},"CE"),n.a.createElement("button",{onClick:r,name:"clear"},"clear"),n.a.createElement("button",{onClick:t,name:"**2"},"x",n.a.createElement("sup",null,"2")),n.a.createElement("button",{onClick:t,name:"**.5"},"x",n.a.createElement("sup",null,"1/2")),n.a.createElement("button",{onClick:t,name:"*"},"x"),n.a.createElement("button",{onClick:t,name:"/"},"/"),n.a.createElement("button",{onClick:t,name:"+"},"+"),n.a.createElement("button",{onClick:t,name:"-"},"-"),n.a.createElement("button",{onClick:t,name:"%"},"%"),n.a.createElement("button",{onClick:a,name:"="},"="))}},,function(e,t,a){e.exports=a(18)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var _=a(0),n=a.n(_),r=a(6),l=a.n(r),c=(a(17),a(3));var u=function(){return n.a.createElement("div",{className:"App"},n.a.createElement("header",null,"made with \u2764"," ",n.a.createElement("a",{href:"http://devbrm.github.io/portfolio/",target:"_blank"},"braham prakash")),n.a.createElement(c.b,null))};l.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(u,null)),document.getElementById("root"))}],[[12,1,2]]]);
//# sourceMappingURL=main.7425fd14.chunk.js.map