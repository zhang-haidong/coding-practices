(async function asyncFoo() {
    console.log("hello foo")
    return "respond msg"
})().then(res => {
    console.log({res})
});

(function foo() {
    console.log("hello world")
})();