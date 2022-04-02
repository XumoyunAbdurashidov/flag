let textOne = document.querySelector('.text-uzb'),
    textTwo = document.querySelector('.text-rus'),
    textThree = document.querySelector('.text-eng'),

    flagUzb = document.querySelector('.flag-uzb'),
    flagRus = document.querySelector('.flag-rus'),
    flagEng = document.querySelector('.flag-eng');


    flagEng.style.display = 'none'
    flagRus.style.display = 'none'
    flagUzb.style.display = 'none'
    
// function uzbBtn() {
//     textOne.style.display = 'block'
//     textTwo.style.display = 'none'
//     textThree.style.display = 'none'
// }

function uzbBtn() {
    flagEng.style.display = 'none'
    flagRus.style.display = 'none'
    flagUzb.style.display = 'block'
}

// function rusBtn() {
//     textOne.style.display = 'none'
//     textTwo.style.display = 'block'
//     textThree.style.display = 'none'
// }

function rusBtn() {
    flagEng.style.display = 'none'
    flagRus.style.display = 'block'
    flagUzb.style.display = 'none'
}

// function engBtn() {
//     textOne.style.display = 'none'
//     textTwo.style.display = 'none'
//     textThree.style.display = 'block'
// }

function engBtn() {
    flagEng.style.display = 'block'
    flagRus.style.display = 'none'
    flagUzb.style.display = 'none'
}




































// let text1 = document.querySelector(".paragraph__one");
// let text2 = document.querySelector(".paragraph__two");
// let text3 = document.querySelector(".paragraph__three");

// function myBtn1() {
//     text1.style.display = "none";
//     text2.style.display = "block";
//     text3.style.display = "none";
// }

// function myBtn2() {
//     text2.style.display = "none";
//     text1.style.display = "block";
//     text3.style.display = "none";
// }

// function myBtn3() {
//     text3.style.display = "block";
//     text2.style.display = "none";
//     text1.style.display = "none";
// }