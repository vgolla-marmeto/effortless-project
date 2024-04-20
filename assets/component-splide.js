if(!customElements.get("custom-slider")) {
class CustomSlider extends HTMLElement{

   constructor(){
      super();
      this.element = this
      console.log(this)
      this.options = JSON.parse(this.element.dataset.sliderOptions);
      this.active = this.element.dataset.active
      console.log(this.active)

      this.displaySliderShow()

   }

    displaySliderShow(){

      document.addEventListener('DOMContentLoaded', function () {

         // Intialization of first splider 

         this.reviews =    new Splide(this.element, this.options).mount()
   
         // Listen for active event to change background color of active slide
         splide.on('active', function (slide) {
           var activeIndex = reviews.index;
           var slides = document.querySelectorAll('.splide__slide');
           
           // Remove active-slide class from all slides
           slides.forEach(function (slide) {
            //  slide.classList.remove('active-slide');
           });
             console.log(activeIndex)
           // Add active-slide class to the active slide
         //   slides[activeIndex].classList.add('active-slide');
         });
       });



    
      this.imageSlide = new Splide("#display-image", {
         type: "fade",
         perPage:1,
         pagination:false,
         arrows: false
      }).mount()
      this.reviews.sync(this.imageSlide)
    }



  }
  customElements.define("custom-slider", CustomSlider)

}

  