(this.webpackJsonpjstopwatch=this.webpackJsonpjstopwatch||[]).push([[0],{10:function(t,e,a){t.exports=a(23)},23:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),i=a(8),s=a.n(i),c=(a(7),a(1)),o=a(2),m=a(4),l=a(3),u=(a(5),function(t){Object(m.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={timerOn:!1,timerStart:0,timerTime:0},t.startTimer=function(){t.setState({timerOn:!0,timerTime:t.state.timerTime,timerStart:Date.now()-t.state.timerTime}),t.timer=setInterval((function(){t.setState({timerTime:Date.now()-t.state.timerStart})}),10)},t.stopTimer=function(){t.setState({timerOn:!1}),clearInterval(t.timer)},t.resetTimer=function(){t.setState({timerStart:0,timerTime:0})},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this.state.timerTime,e=("0"+Math.floor(t/1e3)%60).slice(-2),a=("0"+Math.floor(t/6e4)%60).slice(-2),n=("0"+Math.floor(t/36e5)).slice(-2);return r.a.createElement("div",{className:"Stopwatch"},r.a.createElement("div",{className:"Stopwatch-header"},"Stopwatch"),r.a.createElement("div",{className:"Stopwatch-display"},n," : ",a," : ",e),!1===this.state.timerOn&&0===this.state.timerTime&&r.a.createElement("button",{onClick:this.startTimer},"Start"),!0===this.state.timerOn&&r.a.createElement("button",{onClick:this.stopTimer},"Stop"),!1===this.state.timerOn&&this.state.timerTime>0&&r.a.createElement("button",{onClick:this.startTimer},"Resume"),!1===this.state.timerOn&&this.state.timerTime>0&&r.a.createElement("button",{onClick:this.resetTimer},"Reset"))}}]),a}(n.Component)),h=a(9),f=a.n(h),p=(a(22),function(t){Object(m.a)(a,t);var e=Object(l.a)(a);function a(){return Object(c.a)(this,a),e.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{className:this.props.className,onChange:this.props.onChange,icons:{checked:this.props.icons[0],unchecked:this.props.icons[1]}})}}]),a}(n.Component)),T=r.a.createElement("i",{className:"stpwIcon fas fa-clock"}),d=r.a.createElement("i",{className:"cntdwIcon fas fa-stopwatch-20"}),S=r.a.createElement("i",{className:"autoIcon fas fa-undo-alt"}),E=r.a.createElement("i",{className:"manualIcon fas fa-hourglass-end"}),w=r.a.createElement("i",{className:"arrowUp fas fa-angle-up"}),b=r.a.createElement("i",{className:"twoArrowUp fas fa-angle-double-up"}),v=r.a.createElement("i",{className:"arrowDown fas fa-angle-down"}),O=r.a.createElement("i",{className:"twoArrowDown fas fa-angle-double-down"}),C=function(t){Object(m.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={timerOn:!1,auto:!1,timerStart:0,timerTime:990},t.startTimer=function(){990!==t.state.timerTime&&(console.time("timer"),t.setState({timerOn:!0,timerTime:t.state.timerTime,timerStart:t.state.timerTime}),t.timer=setInterval((function(){var e=t.state.timerTime-10;e>1e3?t.setState({timerTime:e}):!0===t.state.auto&&t.state.timerStart>0?(t.setState({timerTime:t.state.timerStart}),console.log("Tiempo: "+console.timeEnd("timer")),console.time("timer")):(clearInterval(t.timer),t.setState({timerOn:!1,timerTime:990}),console.timeEnd("timer"))}),10))},t.stopTimer=function(){clearInterval(t.timer),t.setState({timerOn:!1})},t.resetTimer=function(){!1===t.state.timerOn&&t.setState({timerTime:t.state.timerStart})},t.restartTimer=function(){t.setState({timerOn:!1,timerStart:0,timerTime:990})},t.adjustTimer=function(e){var a=t.state,n=a.timerTime;a.timerOn||("incMinutes"===e&&n+6e4<216e6?t.setState({timerTime:n+6e4}):"decMinutes"===e&&n-6e4>=0?t.setState({timerTime:n-6e4}):"incSeconds"===e&&n+1e3<216e6?t.setState({timerTime:n+1e3}):"decSeconds"===e&&n-1e3>=0&&t.setState({timerTime:n-1e3}))},t.toggleAuto=function(){t.setState({auto:!t.state.auto})},t}return Object(o.a)(a,[{key:"render",value:function(){var t=this,e=this.state,a=e.timerOn,n=e.auto,i=e.timerTime,s=e.timerStart,c=("0"+Math.floor(i/1e3%60)%60).slice(-2),o=("0"+Math.floor(i/6e4%60)).slice(-2);return r.a.createElement("div",{className:"Countdown"},r.a.createElement("div",{className:"Countdown-header"},"Countdown"),r.a.createElement(p,{onChange:this.toggleAuto,icons:[S,E],className:"toggleAuto"}),r.a.createElement("div",{className:"Countdown-display"},r.a.createElement("button",{onClick:function(){return t.adjustTimer("incMinutes")}},b),r.a.createElement("button",{onClick:function(){return t.adjustTimer("incSeconds")}},w),r.a.createElement("div",{className:"Countdown-time"},o," : ",c),r.a.createElement("button",{onClick:function(){return t.adjustTimer("decMinutes")}},O),r.a.createElement("button",{onClick:function(){return t.adjustTimer("decSeconds")}},v)),!1===a&&(0===s||i===s)&&r.a.createElement("button",{className:"controllerButton",onClick:this.startTimer},"Start"),!0===a&&i>=0&&r.a.createElement("button",{className:"controllerButton",onClick:this.stopTimer},"Stop"),!1===a&&0!==s&&s!==i&&990!==i&&r.a.createElement("button",{className:"controllerButton",onClick:this.startTimer},"Resume"),(!1===a||!1===n&&i<=0)&&s!==i&&s>0&&[r.a.createElement("button",{className:"controllerButton",key:0,onClick:this.resetTimer},"Reset"),r.a.createElement("button",{className:"controllerButton",key:1,onClick:this.restartTimer},"Restart")])}}]),a}(n.Component),N=function(t){Object(m.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={isStopwatch:!1},t.changeTimer=function(){t.setState({isStopwatch:!t.state.isStopwatch})},t}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,{onChange:this.changeTimer,icons:[T,d],className:"changeTimer"}),this.state.isStopwatch&&r.a.createElement(u,null),!this.state.isStopwatch&&r.a.createElement(C,null))}}]),a}(n.Component);s.a.render(r.a.createElement(N,null),document.getElementById("root"))},5:function(t,e,a){},7:function(t,e,a){}},[[10,1,2]]]);
//# sourceMappingURL=main.d2e28045.chunk.js.map