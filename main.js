const contentBoxes = document.querySelectorAll('.content-box');
const contact = document.querySelector('.contact');

contact.addEventListener('click', function(){
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
window.addEventListener('load', function() {
  showBoxesInView();
  window.dispatchEvent(new Event('scroll'));
});

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
  

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;

  const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);

  return (vertInView && horInView);
  }
 
  
  
  