//for body color brown
function backgroundBrown() {
    document.body.style.backgroundColor = 'brown';
}
//==========================
//for body color blue
const blueBtn = document.getElementById('make-blue-btn');
function makeBlue() {
    document.body.style.backgroundColor = 'skyblue';
}
// just set the name of the function;
blueBtn.onclick = makeBlue;
//==============================
//for body color green; akhane jeheto onclick er modde ei function likhe felci, tai function er name likha ta temon proyojon nai! ar ei name cara function k anonymous function bole;
const greenBtn = document.getElementById('make-green-btn');
greenBtn.onclick = function () {
    document.body.style.backgroundColor = 'green';
};
//====================================
//for body color goldenrod; make with addEventListener
const goldenRodBtn = document.getElementById('make-goldenrod-btn');
goldenRodBtn.addEventListener('click', makeGoldenRod);
function makeGoldenRod() {
    document.getElementById('make-khaki-btn').addEventListener('click', function () {
        document.body.style.backgroundColor = 'khaki';
    })
    document.body.style.backgroundColor = 'goldenrod'
}
//Hot pink; 
const hotpinkBtn = document.getElementById('make-hotpink-btn');
hotpinkBtn.addEventListener('click', function () {
    document.body.style.backgroundColor = 'hotpink'
})
//khaki;
document.getElementById('make-khaki-btn').addEventListener('click', function () {
    document.body.style.backgroundColor = 'khaki';
})


