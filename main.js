const contentBoxes = document.querySelectorAll('.content-box');
const contact = document.querySelector('.contact');

contact.addEventListener('click', function(){
    console.log('Contact button clicked');
    const targetPosition = document.body.scrollHeight;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000; // 1 second

    let start = null;
    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const increment = distance * (progress / duration);
        window.scrollTo(0, startPosition + increment);
        if (progress < duration) {
            window.requestAnimationFrame(step);
        }
    }
    window.requestAnimationFrame(step);
})

function showBoxesInView() {
    for (let box of contentBoxes) {
      if (isElementInViewport(box)) {
        box.classList.add('show');
      }
    }
  }
  
  window.addEventListener('scroll', function() {
    for (let box of contentBoxes) {
      if (isElementInViewport(box)) {
        box.classList.add('show');
      }
    }
  });
  
  window.addEventListener('load', function() {
    showBoxesInView();
    window.dispatchEvent(new Event('scroll'));
  });

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
 
  
  
  