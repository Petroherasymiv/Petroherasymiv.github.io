document.querySelector('.Color').addEventListener('click', function () {
    document.querySelector('.Box1').classList.remove('Photo1');
    document.querySelector('.Box2').classList.remove('Photo2');
    document.querySelector('.Box3').classList.remove('Photo3');
    document.querySelector('.Box4').classList.remove('Photo4');
    document.querySelector('.Box5').classList.remove('Photo5');
    document.querySelector('.Box6').classList.remove('Photo6');
    document.querySelector('.Box7').classList.remove('Photo7');
    document.querySelector('.Box8').classList.remove('Photo8');
    document.querySelector('.Box9').classList.remove('Photo9');

    document.querySelector('.Box').classList.add('Border');
    document.querySelector('.Box1').classList.add('Red', 'Border');
    document.querySelector('.Box2').classList.add('Yellow', 'Border');
    document.querySelector('.Box3').classList.add('Blue', 'Border');
    document.querySelector('.Box4').classList.add('Maroon', 'Border');
    document.querySelector('.Box5').classList.add('Lime', 'Border');
    document.querySelector('.Box6').classList.add('Aqua', 'Border');
    document.querySelector('.Box7').classList.add('Teal', 'Border');
    document.querySelector('.Box8').classList.add('Purple', 'Border');
    document.querySelector('.Box9').classList.add('Gray', 'Border');
    document.querySelector('.Box').classList.remove('Photo');

    document.querySelector('.Box1').addEventListener('click', function () {
        document.querySelector('body').style.backgroundColor = 'Red';
        document.querySelector('body').style.backgroundImage = 'none';
    })
    document.querySelector('.Box2').addEventListener('click', function () {
        document.querySelector('body').style.backgroundColor = 'Yellow';
        document.querySelector('body').style.backgroundImage = 'none';
    })
    document.querySelector('.Box3').addEventListener('click', function () {
        document.querySelector('body').style.backgroundColor = 'Blue';
        document.querySelector('body').style.backgroundImage = 'none';
    })
    document.querySelector('.Box4').addEventListener('click', function () {
        document.querySelector('body').style.backgroundColor = 'Maroon';
        document.querySelector('body').style.backgroundImage = 'none';
    })
    document.querySelector('.Box5').addEventListener('click', function () {
        document.querySelector('body').style.backgroundColor = 'Lime';
        document.querySelector('body').style.backgroundImage = 'none';
    })
    document.querySelector('.Box6').addEventListener('click', function () {
        document.querySelector('body').style.backgroundColor = 'Aqua';
        document.querySelector('body').style.backgroundImage = 'none';
    })
    document.querySelector('.Box7').addEventListener('click', function () {
        document.querySelector('body').style.backgroundColor = 'Teal';
        document.querySelector('body').style.backgroundImage = 'none';
    })
    document.querySelector('.Box8').addEventListener('click', function () {
        document.querySelector('body').style.backgroundColor = 'Purple';
        document.querySelector('body').style.backgroundImage = 'none';
    })
    document.querySelector('.Box9').addEventListener('click', function () {
        document.querySelector('body').style.backgroundColor = 'Gray';
        document.querySelector('body').style.backgroundImage = 'none';
    })
})


document.querySelector('.Images').addEventListener('click', function () {
    document.querySelector('.Box1').classList.add('Photo1');
    document.querySelector('.Box2').classList.add('Photo2');
    document.querySelector('.Box3').classList.add('Photo3');
    document.querySelector('.Box4').classList.add('Photo4');
    document.querySelector('.Box5').classList.add('Photo5');
    document.querySelector('.Box6').classList.add('Photo6');
    document.querySelector('.Box7').classList.add('Photo7');
    document.querySelector('.Box8').classList.add('Photo8');
    document.querySelector('.Box9').classList.add('Photo9');

    document.querySelector('.Box').classList.remove('Border');
    document.querySelector('.Box1').classList.remove('Red', 'Border');
    document.querySelector('.Box2').classList.remove('Yellow', 'Border');
    document.querySelector('.Box3').classList.remove('Blue', 'Border');
    document.querySelector('.Box4').classList.remove('Maroon', 'Border');
    document.querySelector('.Box5').classList.remove('Lime', 'Border');
    document.querySelector('.Box6').classList.remove('Aqua', 'Border');
    document.querySelector('.Box7').classList.remove('Teal', 'Border');
    document.querySelector('.Box8').classList.remove('Purple', 'Border');
    document.querySelector('.Box9').classList.remove('Gray', 'Border');

    document.querySelector('.Box1').addEventListener('click', function () {
        document.querySelector('body').style.backgroundImage = `url('images/1.jpg')`;
        document.querySelector('body').style.backgroundRepeat = 'no-repeat';
        document.querySelector('body').style.backgroundSize = 'cover';
    })
    document.querySelector('.Box2').addEventListener('click', function () {
        document.querySelector('body').style.backgroundImage = `url('images/2.jpg')`;
        document.querySelector('body').style.backgroundRepeat = 'no-repeat';
        document.querySelector('body').style.backgroundSize = 'cover';
    })
    document.querySelector('.Box3').addEventListener('click', function () {
        document.querySelector('body').style.backgroundImage = `url('images/3.jpg')`;
        document.querySelector('body').style.backgroundRepeat = 'no-repeat';
        document.querySelector('body').style.backgroundSize = 'cover';
    })
    document.querySelector('.Box4').addEventListener('click', function () {
        document.querySelector('body').style.backgroundImage = `url('images/4.jpg')`;
        document.querySelector('body').style.backgroundRepeat = 'no-repeat';
        document.querySelector('body').style.backgroundSize = 'cover';
    })
    document.querySelector('.Box5').addEventListener('click', function () {
        document.querySelector('body').style.backgroundImage = `url('images/5.jpg')`;
        document.querySelector('body').style.backgroundRepeat = 'no-repeat';
        document.querySelector('body').style.backgroundSize = 'cover';
    })
    document.querySelector('.Box6').addEventListener('click', function () {
        document.querySelector('body').style.backgroundImage = `url('images/6.jpg')`;
        document.querySelector('body').style.backgroundRepeat = 'no-repeat';
        document.querySelector('body').style.backgroundSize = 'cover';
    })
    document.querySelector('.Box7').addEventListener('click', function () {
        document.querySelector('body').style.backgroundImage = `url('images/7.jpg')`;
        document.querySelector('body').style.backgroundRepeat = 'no-repeat';
        document.querySelector('body').style.backgroundSize = 'cover';
    })
    document.querySelector('.Box8').addEventListener('click', function () {
        document.querySelector('body').style.backgroundImage = `url('images/8.jpg')`;
        document.querySelector('body').style.backgroundRepeat = 'no-repeat';
        document.querySelector('body').style.backgroundSize = 'cover';
    })
    document.querySelector('.Box9').addEventListener('click', function () {
        document.querySelector('body').style.backgroundImage = `url('images/9.jpg')`;
        document.querySelector('body').style.backgroundRepeat = 'no-repeat';
        document.querySelector('body').style.backgroundSize = 'cover';
    })

})




