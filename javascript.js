
// slider
  let slideIndex = 1;
  showSlides(slideIndex);
  
  // Hàm thực hiện chuyển slide tự động
  function autoSlide() {
    plusSlides(1);
    setTimeout(autoSlide, 5000); // 5000ms = 5s
  }
  
  // Bắt đầu chuyển slide tự động khi trang tải xong
  window.onload = autoSlide;
  
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  }


