// JavaScript 与 DOM API

const listItems = document.querySelectorAll("li");
// 将 <li> 元素的引用存储在一个名为 listItems 的变量中

function toggleDone(e) {
  // 名为 toggleDone() 的函数，
  // 如果列表项还没有 done 类，就添加该类；
  // 如果已经有了，就移除该类
  if (!e.target.className) {
    e.target.className = "done";
  } else {
    e.target.className = "";
  }
}

listItems.forEach((item) => {
  item.addEventListener("click", toggleDone);
});
// 遍历列表项（使用 forEach()），
// 并为每个列表项添加一个click事件监听器（
// 使用 addEventListener()），
// 以便当它被点击时，切换 done 类，应用我们之前定义的 CSS

// // Store a reference to the <h1> in a variable
// const myHeading = document.querySelector("h1");
// // Update the text content of the <h1>
// myHeading.textContent = "Hello world!";
// // textContent 属性代表 <h1> 元素的文本内容

const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
  }
});
// 将 <img> 元素的一个引用存储在 myImage 变量中。
// 然后你给它分配了一个 click 事件处理函数。
// 每次点击 <img> 时，该函数会执行以下操作：

// 获取图像的 src 属性的值。
// 使用条件结构（if...else）来检查 src 值是否等于原始图像的路径：
// 如果是这样，代码将 src 值更改为第二个图片的路径，
// 强制在 <img> 元素中加载其他图片。
// 如果它不是（意味着图片已经被更改了），src 值会切换回原始图片路径。

// let 为可变的块级作用域，相对于const的不可变块级作用域
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
//  prompt() 函数，要求用户输入数据，
// 并在用户点击 OK 后将其存储在一个变量中

// 使用了 Web Storage API，
// 它允许我们在浏览器中存储数据并在之后检索它
// 名为 "name" 的数据项，将其值设置为包含用户输入的 myName 变量

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
