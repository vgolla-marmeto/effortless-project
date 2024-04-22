if (!customElements.get("custom-slider")) {
   class CustomSlider extends HTMLElement {
       constructor() {
           super();
           this.element = this;
           console.log(this);
           this.options = JSON.parse(this.element.dataset.sliderOptions);
           console.log(this.options);

           this.displaySliderShow();
       }

       displaySliderShow() {
           let reviews = new Splide(this.element, this.options).mount();
           let imageSlide = new Splide("#display-image", {
               type: "fade",
               perPage: 1,
               pagination: false,
               arrows: false
           }).mount();
           reviews.sync(imageSlide);
           reviews.on("active", (slide) => { 
               var activeIndex = reviews.index;
               this.toggleActiveClass(reviews.Components.Elements.slides, activeIndex);
           });

           this.reviews = reviews; 
           reviews.emit("active", reviews.Components.Elements.slides[0]);
       }

       toggleActiveClass(slides, activeIndex) {
           slides.forEach((slide, index) => {
               if (index === activeIndex) {
                console.log(slide.queryselector(".custom-testimonials--slide"))
                   slide.classList.add(`active-slide-${activeIndex}`);
                   console.log(`active-slide-${activeIndex}`)
                   slide.classList.remove(`normal-color-${activeIndex}`)
               } else {
                   slide.classList.remove(`active-slide-${activeIndex}`);
                   slide.classList.add(`normal-color-${activeIndex}`)
                   console.log(`normal-color-${activeIndex}`)
               }
           });
       }
   }
   customElements.define("custom-slider", CustomSlider);
}
