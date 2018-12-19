var count = 0;

window.addEventListener('scroll', function(event) {
  var el = document.querySelector('.show-on-scroll');

  if(window.scrollY >= 400) el.classList.add('shown');
  //else el.classList.remove('shown');

  var el2 = document.querySelector('.show-on-scroll-map');
  var vdo = document.querySelector("video");
  if(window.scrollY >= 50) {
	el2.classList.add('shown');
	if(count===0) {
		vdo.play();
		count = 1;
		}
	}
  //else el2.classList.remove('shown');

  var el3 = document.querySelector('.show-on-scroll-map-split');
  if(window.scrollY > 300) el3.classList.add('shown');
  //else el3.classList.remove('shown');

  var el5 = document.querySelector('.show-on-scroll-compare');
  if(window.scrollY >= 50) el5.classList.add('shown');
  //else el5.classList.remove('shown');

});
