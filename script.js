let target = document.querySelector("#dynamic");
let stringArr = ["Story of HTML", "Story of Car Inspect",
"Story of Python", "Story of WEB"]
let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
let selectStringArr = selectString.split("");

function randomString(){
    let stringArr = ["Story of Car Inspect","Story of Used Car",
    "Story of Python", "Story of WEB"]
    let selectString = stringArr[Math.floor(Math.random()*stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;

}

//타이핑 리셋
function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

//한글자씩 텍스트 출력 함수

function dynamic(randomArr){

    if(randomArr.length>0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        }, 80);
    }else{
        setTimeout(resetTyping, 3000);
    }
}

dynamic(randomString());

function blink(){
    target.classList.toggle("active");

}
setInterval(blink, 500);

let observer = new IntersectionObserver((e)=>{
    e.forEach((box)=>{
        if(box.isIntersecting){
            box.target.style.opacity = 1;
        }else{
            box.target.style.opacity = 0;
        }

    })
})

let div = document.querySelectorAll('div')
observer.observe(div[0])
observer.observe(div[1])
observer.observe(div[2])
observer.observe(div[3])
