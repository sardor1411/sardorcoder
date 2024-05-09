let sun = document.querySelector('.sun');
let moon = document.querySelector('.moon');
let sun1 = document.querySelector('.sun1');
let moon1 = document.querySelector('.moon1');
let body = document.body;
let menuBar = document.querySelector('.menuBar');
let navMenu = document.getElementById('nav_menu');
let navClose = document.getElementById('nav-close');
const cursors1 = document.querySelectorAll('.cursor1');
const prjkt1 = document.querySelectorAll('.prjkt1');
const cursors2 = document.querySelectorAll('.cursor2');
const prjkt2 = document.querySelectorAll('.prjkt2');
const cursors3 = document.querySelectorAll('.cursor3');
const prjkt3 = document.querySelectorAll('.prjkt3');
const cursors4 = document.querySelectorAll('.cursor4');
const prjkt4 = document.querySelectorAll('.prjkt4');


menuBar.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
    body.onscroll = close;
})

function close() {
    navMenu.classList.remove("show-menu");

}
navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
});


sun.addEventListener("click", () => {
    body.classList.add("darkLight");
    sun.classList.toggle("hide");
    moon.classList.toggle("hide");
});

moon.addEventListener("click", () => {
    body.classList.remove("darkLight");
    sun.classList.toggle("hide");
    moon.classList.toggle("hide");
});

sun1.addEventListener("click", () => {
    body.classList.add("darkLight");
    sun1.classList.toggle("hide");
    moon1.classList.toggle("hide");
});

moon1.addEventListener("click", () => {
    body.classList.remove("darkLight");
    sun1.classList.toggle("hide");
    moon1.classList.toggle("hide");
});


document.addEventListener('DOMContentLoaded', function () {
    const cursors1 = document.querySelectorAll('.cursor1');
    const prjkt1 = document.querySelectorAll('.prjkt1');

    prjkt1.forEach(prjkt => {
        prjkt.addEventListener('mousemove', function (e) {
            cursors1.forEach(cursor => {
                cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            });
        });

        prjkt.addEventListener('mousedown', function () {
            cursors1.forEach(cursor => {
                cursor.style.backgroundColor = 'red';
            });
        });

        prjkt.addEventListener('mouseup', function () {
            cursors1.forEach(cursor => {
                cursor.style.backgroundColor = '#000';
            });
        });

        prjkt.addEventListener('mouseleave', function () {
            cursors1.forEach(cursor => {
                cursor.style.display = 'none';
            });
        });

        prjkt.addEventListener('mouseenter', function () {
            cursors1.forEach(cursor => {
                cursor.style.display = 'block';
            });
            setTimeout(() => {
                cursors1.forEach(cursor => {
                    cursor.style.backgroundColor = '#000';
                });
            }, 1);
        });
    });
});

//cursor2

document.addEventListener('DOMContentLoaded', function () {
    const cursors2 = document.querySelectorAll('.cursor2');
    const prjkt2 = document.querySelectorAll('.prjkt2');

    prjkt2.forEach(prjkt => {
        prjkt.addEventListener('mousemove', function (e) {
            cursors2.forEach(cursor => {
                cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            });
        });

        prjkt.addEventListener('mousedown', function () {
            cursors2.forEach(cursor => {
                cursor.style.backgroundColor = 'green';
            });
        });

        prjkt.addEventListener('mouseup', function () {
            cursors2.forEach(cursor => {
                cursor.style.backgroundColor = '#000';
            });
        });

        prjkt.addEventListener('mouseleave', function () {
            cursors2.forEach(cursor => {
                cursor.style.display = 'none';
            });
        });

        prjkt.addEventListener('mouseenter', function () {
            cursors2.forEach(cursor => {
                cursor.style.display = 'block';
            });
            setTimeout(() => {
                cursors2.forEach(cursor => {
                    cursor.style.backgroundColor = '#000';
                });
            }, 1);
        });
    });
});

//cursor3
document.addEventListener('DOMContentLoaded', function () {
    const cursors3 = document.querySelectorAll('.cursor3');
    const prjkt3 = document.querySelectorAll('.prjkt3');

    prjkt3.forEach(prjkt => {
        prjkt.addEventListener('mousemove', function (e) {
            cursors3.forEach(cursor => {
                cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            });
        });

        prjkt.addEventListener('mousedown', function () {
            cursors3.forEach(cursor => {
                cursor.style.backgroundColor = 'var(--font-color)';
            });
        });

        prjkt.addEventListener('mouseup', function () {
            cursors3.forEach(cursor => {
                cursor.style.backgroundColor = '#000';
            });
        });

        prjkt.addEventListener('mouseleave', function () {
            cursors3.forEach(cursor => {
                cursor.style.display = 'none';
            });
        });

        prjkt.addEventListener('mouseenter', function () {
            cursors3.forEach(cursor => {
                cursor.style.display = 'block';
            });
            setTimeout(() => {
                cursors3.forEach(cursor => {
                    cursor.style.backgroundColor = '#000';
                });
            }, 1);
        });
    });
});

//cursor4
document.addEventListener('DOMContentLoaded', function () {
    const cursors4 = document.querySelectorAll('.cursor4');
    const prjkt4 = document.querySelectorAll('.prjkt4');

    prjkt4.forEach(prjkt => {
        prjkt.addEventListener('mousemove', function (e) {
            cursors4.forEach(cursor => {
                cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            });
        });

        prjkt.addEventListener('mousedown', function () {
            cursors4.forEach(cursor => {
                cursor.style.backgroundColor = 'blue';
            });
        });

        prjkt.addEventListener('mouseup', function () {
            cursors4.forEach(cursor => {
                cursor.style.backgroundColor = '#000';
            });
        });

        prjkt.addEventListener('mouseleave', function () {
            cursors4.forEach(cursor => {
                cursor.style.display = 'none';
            });
        });

        prjkt.addEventListener('mouseenter', function () {
            cursors4.forEach(cursor => {
                cursor.style.display = 'block';
            });
            setTimeout(() => {
                cursors4.forEach(cursor => {
                    cursor.style.backgroundColor = '#000';
                });
            }, 1);
        });
    });
});



