/*
// console.log("---------------------------separator---------------------------");
notes rules:
1.module starting design must like : // [[[[[[[[[[[[[[[[[[[[[[[[[[Module : 24  ||| 9 videos]]]]]]]]]]]]]]]]]]]]]]]]]]
2.module video design must like : // ************************** 24-4 Get different HTML elements in JS by using tag name
3.comments design must like : // এখানে allH2 উপর array method apply করলাম
4. special note design must like : 
// console.log("---------------------------special note---------------------------");
special note special note special note special note special note 
// console.log("---------------------------special note---------------------------");
*/



// [[[[[[[[[[[[[[[[[[[[[[[[[[Module : 24  ||| 9 videos]]]]]]]]]]]]]]]]]]]]]]]]]]
/*
topics:
    1) getElementsByTagName, getElementById, getElementsByClassName, querySelector, querySelectorAll
2).innerHTML, .innerText, .style
3).setAttribute, .getAttribute, .childNodes, .parentNode, .children
4).classList.add, .appendChild, .removeChild,
*/



// ************************** 24-4 Get different HTML elements in JS by using tag name



/*
// console.log("---------------------------special note---------------------------");
// DOM = Document Object Model; আমরা একটা object variable কে যেমন বিভিন্ন method apply করে করে তার property গুলো তাদের value গুলোকে access করতে পারি / তাদেরকে পরিবর্তন করতে পারি ইত্যাদি। ঠিক তেমনি console এ শুধুমাত্র document.differerntFunctions() লিখে পুরা HTML কেই ধরে নাড়াচাড়া দিয়ে যা খুশি করতে পারি। যেমনঃ
// console.log("---------------------------special note---------------------------");
document.getElementsByTagName("h2"); // document ভিতরের সবগুলো h2 tag কে ধরলাম।
let allH2 = document.getElementsByTagName("h2"); // document ভিতরের সবগুলো h2 tag কে ধরে একটা variable এ রাখলাম।
console.log(allH2); // এখানে allH2 কে print করলাম যা console array এর মত দেখালেও এটা array না বরং Object
// এখানে allH2 উপর array method apply করলাম
console.log(allH2[0]); // to ask first element of array
for (const h2 of allH2) {
    console.log(h2); // to print all element of array
    console.log(h2.innerHTML); // to print all element of array
    console.log(h2.innerText); // to print all text of element of array
}
// console.log("---------------------------special note---------------------------");
// "innerHTML" helps to get child Element with tag name but as text  |||   but "innerText" helps to get text of child Element without tag name but with css style   ||| on the othe hand "textContent" get text of child Element without tag name and css style 
// console.log("---------------------------special note---------------------------");
console.log("---------------------------separator---------------------------");
let allP = document.getElementsByTagName("p"); // document ভিতরের সবগুলো p tag কে ধরে একটা variable এ রাখলাম like an array but not।
for (const p of allP) {
    console.log(p.innerText);
}
*/



// ************************** 24-5 || 24-6 || Capture and change Element css by using getElementById || getElementsByClassName || querySelector || querySelectorAll


/*
// JS দিয়ে কোন id কে ধরে CSS ও apply করা যায় by using getElementById 
// styling mainTitle
document.getElementById('mainTitle').style.background = "black"
document.getElementById('mainTitle').style.color = "yellow"
// JS দিয়ে কোন id কে ধরে CSS ও apply করা যায় by using getElementsByClassName 
// styling blogTitle
let titleOfBlog = document.getElementsByClassName("blogTitle");
for (const blog of titleOfBlog) {
    blog.style.background = "indianred";
    blog.style.color = "white";
    blog.style.padding = "20px";
    blog.style.textAlign = "center";
    blog.style.borderRadius = "10px";
}
// JS দিয়ে কোন id/class/tag কে ধরে একদম CSS মতন করে CSS ও apply করা যায় by using querySelector || querySelectorAll
// console.log("---------------------------special note---------------------------");
//যদি same class/tag এর একাধিক element এর মধ্যে কেবল মাত্র প্রথমটাকেই stylilng করতে চাই use querySelector   |||   যদি সব গুলোকে styling করতে চাই use querySelectorAll   |||   যদি specific কোন একটা কে styling করতে চাই use querySelectorAll[indexNo]
// console.log("---------------------------special note---------------------------");
// style applied only on firs item  using querySelector
document.querySelector('.lists1 ul li').style.color = "red";
// style applied only on midleItems classes  using querySelectorAll
let midItems = document.querySelectorAll(".midleItems");
for (const item of midItems) {
    item.style.color = "yellow";
    item.style.background = "rgba(0,0,0,1)";
}
// style applied only on second mid item using querySelectorAll[indexNo]
document.querySelectorAll(".midleItems")[1].style.background = "rgba(0,0,0,0.5)";
*/




// *************************************24-7 NodeList, htmlcollection, setAttribute, parentNode, childnodes


/*
// console.log("---------------------------special note---------------------------");
//HTML এর প্রতিটা জিনিসই একেক্টা Node অর্থাৎ অনেকটা members in document-family। এদের একেক রকম নাম আছে যেমন comment গুলো হচ্ছে comment-node ||| text গুলো text-node ||| attribute গুলো attribute-node ||| document গুলো document-node ||| doctype গুলো doctype-node etc | যার ফলে JS দিইয়ে select করলে NodeList, htmlcollection ইত্যাদি show করে এবং array এর মতন দেখায় কিন্তু এগুলো array না বরং array type object তাই এদের উপরে array এর অনেক method apply করা যায় যেমনঃ forOf(),length,indexOf() কিন্তু সব methodই না যেমন push() apply হবে না।
// console.log("---------------------------special note---------------------------");
let listItem2 = document.querySelector("#list2");
console.log(listItem2);
console.log(listItem2.getAttribute("class"));
listItem2.setAttribute("title", "This is a list item-2");
// to know the father grandFather grandGrandFather so above use parentNode
console.log(listItem2.parentNode);
console.log(listItem2.parentNode.parentNode);
console.log(listItem2.parentNode.parentNode.parentNode);
console.log(listItem2.parentNode.parentNode.parentNode.parentNode);
console.log(listItem2.parentNode.parentNode.parentNode.parentNode.parentNode);
console.log(listItem2.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
console.log(listItem2.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
// to know the Child grandChild grandGrandChild so bellow use childnodes
console.log(listItem2.childNodes);
*/





// ****************************** 24-8  ||  24-9  ||  Create HTML elements using Javascript and appendChild classList.add   ||   Module Remove HTML element by JavaScript and remove child summary and DOM Review



/*
// console.log("---------------------------special note---------------------------");
// এখানে style দিলে নতুন যেগুলো JS দিয়ে বানানো হয়েছে তারা পাবে না তাই এটাকে নিচে নিয়ে যেতে হবে
// console.log("---------------------------special note---------------------------");
// একটা নতুন but same style এর article add করতে হবে blog section এর ভিতরে
// convetional way to add "My Blog_3 : This is a new article added by JavaScript in Conventional way"
// step-1: creat a article tag
let aNewArticle = document.createElement("article"); // article tag created
aNewArticle.classList.add("blogItem"); // "blogItem" class added
// step-2: creat a h3 and p tag
// add h3 tag
let h3OfANewArticle = document.createElement("h3"); // h3 tag created
h3OfANewArticle.innerText = "My Blog_3 : This is a new article added by JavaScript"; // text content added
// add p tag
let pOfANewArticle = document.createElement("p"); // p tag created
pOfANewArticle.innerText = "This is a new PARAGRAPH added by JavaScript This is a new PARAGRAPH added by JavaScript This is a new PARAGRAPH added by JavaScript "; // text content added
// step-3: append h3 and p tag inside article tag
aNewArticle.appendChild(h3OfANewArticle); // h3 tag added inside article tag
aNewArticle.appendChild(pOfANewArticle); // p tag added inside article tag
// step-3: append article tag inside section.blogSection tag of HTML
let blogSection = document.querySelector(".blogSection"); // section.blog tag selected
// console.log(blogSection);
blogSection.appendChild(aNewArticle); // article tag added inside section.blogSection tag 
// modern way with BackTik method
// step - 1  creat a new article tag
let anotherNewArticle = document.createElement("article"); // anotherNewArticle tag created
anotherNewArticle.classList.add("blogItem"); // "blogItem" class added
// step - 2  creat a new h3 and p tag inside anotherNewArticle tag
anotherNewArticle.innerHTML = `
    <h3>My Blog_4 : This is a new article added by JavaScript modern way with BackTik method</h3>
    <p>This is a new PARAGRAPH added by JavaScript modern way with BackTik method This is a new PARAGRAPH added by JavaScript modern way with BackTik method This is a new PARAGRAPH added by JavaScript modern way with BackTik method </p>`;
// step - 3  append article tag inside section.blogSection tag of HTML
blogSection.appendChild(anotherNewArticle); // anotherNewArticle tag added inside section.blogSection tag
// console.log("---------------------------special note---------------------------");
// নতুন blog টা add হবার পরেও তাতে কোন style পরেনি কারন javaScript এ যদি style add করার পরে নিচে কোন নতুন same class add করা হয়ও তাতে style add হবে না । style add করার জন্য style গুলোকে same class add করা নতুন element এর নিচে নিয়ে আসতে হবে
// console.log("---------------------------special note---------------------------");
let blogItem = document.querySelectorAll(".blogItem");
// console.log(blogItem);
for (const blog of blogItem) {
    blog.style.border = "1px solid orange";
    blog.style.margin = "10px";
    blog.style.padding = "10px 20px";
    blog.style.borderRadius = "10px";
}
// remove HTML element by javaScript
// lets remove My Blog_2
console.log(blogSection);
console.log(blogSection.childNodes); // childNodes shows all nodes icluding comments,text etc inside section.blogSection tag
let itemBlogINBlogSection = blogSection.children;
console.log(itemBlogINBlogSection); // children shows only the child tags inside section.blogSection tag
blogSection.removeChild(itemBlogINBlogSection[2]); // remove the second child tag inside section.blogSection tag
*/






// [[[[[[[[[[[[[[[[[[[[[[[[[[Module : 25  ||| 9 videos]]]]]]]]]]]]]]]]]]]]]]]]]]




// ******************************** 25-1 What is Event, different types of event in web


// useing inline css Button এ ক্লিক করলে কনসলে ক্লিকড  লিখা আসবে আর h tag এও ক্লিকে লিখা আসবে [[[  plz visit index.html line-128-129  ]]]




// ******************************** 25-2 Add onclick handler directly or via javascript



/*
// button এ ক্লিক করলে body tag এর background color টাই change হয়ে যাবে
// system - ১ : "onclick" attribute এর মধ্যেই inline js দিয়ে define করে দেয়া [[সাধারনত এই পদ্ধতি use করা হয় না]]
// system - ২ : "onclick" attribute in the html tag and external javascript file
function onclickBody2Green() {
    document.body.style.backgroundColor = "green";
}
// system - ৩ : html tag এ "onclick" attribute না দিয়ে external javascript file এ getElementById দিয়ে ধরে ধরে ".onclick" use করে + normal function add করে 
let btn4Body2Blue = document.getElementById('changeBodyColor2BLUE'); // (1)gettint the button by id
btn4Body2Blue.onclick = changeBodyColor2BLUE; /// 2)add onclick handler to the button but dont call here
// (3)declare the function in details bellow 
function changeBodyColor2BLUE() {
    document.body.style.backgroundColor = "blue";
}
// system - 4 : html tag এ "onclick" attribute না দিয়ে external javascript file এ queryselector দিয়ে ধরে ধরে ".onclick" use করে + Anonymous function add করে 
let btn4Body2YELLOW = document.getElementById('changeBodyColor2YELLOW'); // (1)gettint the button by id
// (2)declare the anonymous function in details bellow
btn4Body2YELLOW.onclick = function () {
    document.body.style.backgroundColor = "yellow";
}
// system - 5 : external javascript file এ getElementById দিয়ে ধরে ধরে ".addevenlistener" use করে + normal function add করে 
let btn4Body2GOLDENROD = document.getElementById('changeBodyColor2GOLDENROD'); // (1)gettint the button by id
// (2)declare the  function in details bellow using ".addevenlistener"
btn4Body2GOLDENROD.addEventListener('click', changeBodyColor2GOLDENROD);
function changeBodyColor2GOLDENROD() {
    document.body.style.backgroundColor = "goldenrod";
}
// system - 6 : external javascript file এ getElementById দিয়ে ধরে ধরে ".addevenlistener" use করে + Anonymous function add করে 
let btn4Body2HOTPINK = document.getElementById('changeBodyColor2HOTPINK'); // (1)gettint the button by id
// (2)declare the Anonymous function in details bellow using ".addevenlistener"
btn4Body2HOTPINK.addEventListener('click', function () {
    document.body.style.backgroundColor = "hotpink";
});
// system - 7 [[  mostly used system to apply js  ]]: external javascript file এ কোন variable delcaration ছাড়াই getElementById দিয়ে ধরে ধরে ".addevenlistener" use করে + Anonymous function add করে
document.getElementById('changeBodyColor2ORANGE').addEventListener('click', function () {
    document.body.style.background = 'orange';
});
*/

// console.log("---------------------------special note---------------------------");
/*
system 1 + 2 প্রায় same same : inline js system by onclick method
system 3 + 4 প্রায় same same : external js system by onclick method
system 5 + 6 প্রায় same same : external js system by addEventListener method
system 7 : external js system by addEventListener method
mostly used method is system 7 and system 3
*/
// console.log("---------------------------special note---------------------------");





// ******************************** 25-4 Most common ways to set Event Handlers



// button এ ক্লিক করলে h1 tag এর ভিতরের text change হয়ে যাবে

/*
// Click2ChangeBySystem3Method
let btn4ChangeBySystem3Method = document.getElementById("system3Method2ApplyJS");
let h1TAGToChangeBySystem3_7 = document.getElementById('h1ToChangeBySystem3_7')
function system3Method() {
    h1TAGToChangeBySystem3_7.innerHTML = 'The primary text by System3 method'
}
// Click2ChangeBySystem7Method   ||   The direct method
document.getElementById('system7Method2ApplyJS').addEventListener('click', function () {
    h1TAGToChangeBySystem3_7.innerHTML = 'The primary text by System7 method'
});
*/


// button এ ক্লিক করলে input tag এর ভিতরের text change হয়ে খালি হয়ে h1 tag এর ভিতরে চলে যাবে 

/*
// getting all required tags in a variable
let btn4UploadInput2H1 = document.getElementById("input2h1Btn");
let input4UploadInput2H1 = document.getElementById("input4Upload2H1");
let h1Tag4ShowingUploads = document.getElementById("h1forShowingUploads");
// direct sytem 7 method
btn4UploadInput2H1.addEventListener("click", function () {
    h1Tag4ShowingUploads.innerHTML = input4UploadInput2H1.value;
    input4UploadInput2H1.value = "";
});
*/




// ******************************** 25-5 Create a comment box and display comment




// comment box এর comment Upload হবার সাথে সাথে facebook এর মত উপরে new comment হিসেবে add হবে

/*
// gett all required tags in variable
let btn4CommentUpload = document.getElementById('btn4Comment');
let newComment = document.getElementById('commentBox');
let comment2AppendIn = document.getElementById('commentsHolder');
// start functioning of comment box
btn4CommentUpload.addEventListener('click', function () {
    // step 1 : creat a new li tag and insert text in it
    let newCommentHolder = document.createElement('li');
    newCommentHolder.innerHTML = newComment.value;
    // step 2 : append new li tag in comment box
    comment2AppendIn.appendChild(newCommentHolder);
    // step 3 : clear comment box
    newComment.value = '';
});
*/




// ******************************** 25-6 Simple github like delete confirmation button




//  button এ ক্লিক করলে ul থেকে li কে delete করতে হবে display-none / remove child use করে

/*
let btn4Delete = document.querySelector('#btn4deleteChils');
let btn4Add = document.querySelector('#btn4AddChils');
let ol4Delete = document.querySelector('ol');
// li কে delete করতে
btn4Delete.addEventListener('click', function () {
    ol4Delete.removeChild(ol4Delete.lastElementChild);
});
// li কে Add করতে
btn4Add.addEventListener('click', function () {
    let li4Add = document.createElement('li');
    li4Add.textContent = 'item-new';
    ol4Delete.appendChild(li4Add);
});
*/


// [[[[[[[[[[[[[[[[[[[[[[[[[[[[input field এর উপরে বিভিন্ন addlistener effect]]]]]]]]]]]]]]]]]]]]]]]]]]]]


/*
let btn4delete = document.getElementById('deleteBtn');
let item4delete = document.getElementById('item4delete');
let inputField = document.getElementById('inputField');
// effect of focus 
inputField.addEventListener('focus', function () {
    item4delete.style.background = 'lightblue';
    item4delete.innerHTML = 'yap input field now focused';
});
// effect of  blur
inputField.addEventListener('blur', function () {
    item4delete.style.background = 'lightgreen';
    item4delete.innerHTML = 'yap input field now out of  focused and blured';
});
// effect of  keyup
inputField.addEventListener('keyup', function () {
    item4delete.style.background = 'red';
    item4delete.innerHTML = inputField.value;
});
// effect of  change
inputField.addEventListener('change', function () {
    item4delete.style.background = 'blue';
    item4delete.innerHTML = inputField.value;
});
*/


/*
// console.log("---------------------------special note---------------------------");
// keydown and keypress are very less in use
// console.log("---------------------------special note---------------------------");
        // effect of  keydown
        inputField.addEventListener('keydown', function () {
            item4delete.style.background = 'blue';
                });
        // effect of  keypress
        inputField.addEventListener('keypress', function () {
            item4delete.style.background = 'orange';            
            item4delete.innerHTML = inputField.value;      
                });
        */


// [[[[[[[[[[[[// project :  input field এ delete লিখলে paragraph এর delete me টা মুছে যাবে]]]]]]]]]]]]

/*
// step - 1 : button এ disable attribute লাগাতে হবে
btn4delete.setAttribute('disabled', true);
// step - 2 : inpu এর ভিতরে 'delete' লিখলে button এr disable attribute উঠারে হবে
inputField.addEventListener('keyup', function (event) {
    // item4delete.innerHTML = event.target.value;
    if (event.target.value == "delete") {
        btn4delete.removeAttribute('disabled');
    } else {
        btn4delete.setAttribute('disabled', true);
    }
});
// step - 3 :  button এ চাপ দিয়ে paragraph কে delete করতে হবে
btn4delete.addEventListener('click', function () {
    item4delete.remove();
});
*/







// ******************************** 25-7 (semi-advanced) Event bubble and Stop propagating









// console.log("---------------------------special note---------------------------");
/*
* event parameter হচ্ছে যাকে কোণ event-handller দেয়া হয়েছে
* event bubble হচ্ছে ধরি কোন একটা document এর structur হল নিম্নরূপ যার প্রতিটা stage এ addlistener হিসেবে same effect "click" দেয়া আছে আর output effect দেয়া আছে console(tagName),
            "html>body>main>section>div>ul>li"
browser এর কাছে li ঘরের মত যার ফ্ল্যাট ul যার বাড়ি div যার মহল্লা section যার গ্রাম main যার থানা body আর ডিস্ট্রিক্ট html.
এখন যদি li এ ক্লিক পরে তাহলে browser সব গুলার effect কেই cocsole এ print করবে কারণ 
li ক্লিক মানে কি html এর কোথাও ক্লিক ? - হ্যা[তাহলে html effect show করাবে]
li ক্লিক মানে কি body এর কোথাও ক্লিক ? - হ্যা[তাহলে body effect show করাবে]
li ক্লিক মানে কি main এর কোথাও ক্লিক ? - হ্যা[তাহলে main effect show করাবে]
li ক্লিক মানে কি section এর কোথাও ক্লিক ? - হ্যা[তাহলে section effect show করাবে]
li ক্লিক মানে কি div এর কোথাও ক্লিক ? - হ্যা[তাহলে div effect show করাবে]
li ক্লিক মানে কি ul এর কোথাও ক্লিক ? - হ্যা[তাহলে ul effect show করাবে]
li ক্লিক মানে ত li এ ক্লিকই তাই effect show করাবে
আর এই event bubble off করার way হচ্ছে যেই stage থেকে আর উপরের দিকে effect কে continue করতে চাই না তার মাঝে ".addlistener('click', function(event){event.stopPropagation();})" add করতে হবে
*/
// console.log("---------------------------special note---------------------------");



/*
let grandFather = document.querySelector('.grandFather');
let father = document.querySelector('.father');
let SpecialChild3 = document.querySelector('#SpecialChildNo3');
SpecialChild3.addEventListener('click', function (event) {
    console.log('Special Child 3 clicked');
    // stop propagation added যার ফলে special child কে ক্লিক করলে আর তার parent এর event handler activate হব না
    event.stopPropagation();
});
father.addEventListener('click', function () {
    console.log('father.ul clicked');
});
grandFather.addEventListener('click', function () {
    console.log('grandFather.div clicked');
});
*/







// ******************************** 25-8 (advanced) Event delegate and benefit of Event bubble




// <!-- // event delegation দিয়ে ক্লিক target কে "even.target.removeChild()" করা -->