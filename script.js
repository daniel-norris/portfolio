
console.log("hello");


var animation = anime({
        targets: '.test',
        translateY: 900,
        // delay: function(el, i) { return i * 100; },
        // elasticity: 200,
        easing: 'easeInOutSine',
        autoplay: false,
        opacity: 1,
    });

    // var seekProgressEl = document.querySelector('.seek-anim-demo .progress');

    // seekProgressEl.oninput = function() {
    //     animation.seek(animation.duration * (seekProgressEl.value / 100));
    // };

animation.seek(200);