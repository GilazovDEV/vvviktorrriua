window.addEventListener('scroll', checkScroll);
window.addEventListener('scroll', checkText);

document.addEventListener('DOMContentLoaded', checkScroll);
document.addEventListener('DOMContentLoaded', checkText);

function checkScroll() {

    let scrollPos = this.window.scrollY;

    if (scrollPos > 700) {
        navbar.classList.add('black');
    } else {
        navbar.classList.remove('black');
    }
}

function checkText() {
    let scrollPos = this.window.scrollY;

    if (scrollPos > 700) {
        navlink.classList.add('white'),
        navlink1.classList.add('white'),
        navlink2.classList.add('white');
    } else {
        navlink.classList.remove('white'),
        navlink1.classList.remove('white'),
        navlink2.classList.remove('white');
    }
}


function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('element-show');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.element-animation');
  
  for (let elm of elements) {
    observer.observe(elm);
  }