if(!customElements.get("custom-slider")) {
class CustomSlider extends HTMLElement{

   constructor(){
      super();
      this.element = this
      this.options = JSON.parse(this.element.dataset.sliderOptions);
   

      this.displaySliderShow()

   }

    displaySliderShow(){
      let reviews = new Splide(this.element, this.options).mount();
            let imageSlide = new Splide("#display-image", {
                type: "fade",
                perPage: 1,
                pagination: false,
                arrows: false
            }).mount();
            reviews.sync(imageSlide);

            reviews.on("active", (slide) => { // Use arrow function to retain the context of `this`
               if (reviews.index === 0){
                  var activeColor = slide.dataset.active
                  console.log(activeColor)
               }
                var activeIndex = reviews.index;
                console.log(activeIndex);

                var slides = document.querySelectorAll('.splide__slide');
        
                // Remove active-slide class from all slides
                slides.forEach(function (slide) {
                  slide.classList.remove('active-slide');
                });
        
                // Add active-slide class to the active slide
                slides[activeIndex].classList.add('active-slide');


            });

            this.reviews = reviews; // Store reviews instance as a property of the class

            // Trigger the "active" event for the initial slide
            reviews.emit("active", reviews.Components.Elements.slides[0]);
        


  }
}
  customElements.define("custom-slider", CustomSlider)

}

  