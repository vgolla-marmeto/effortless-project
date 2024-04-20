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

           reviews.on("active", (slide) => { // Use arrow function to retain the context of `this`
               var activeIndex = reviews.index;
               console.log(activeIndex);
               this.toggleActiveClass(reviews.Components.Elements.slides, activeIndex);
           });

           this.reviews = reviews; // Store reviews instance as a property of the class

           // Trigger the "active" event for the initial slide
           reviews.emit("active", reviews.Components.Elements.slides[0]);
       }

       toggleActiveClass(slides, activeIndex) {
           slides.forEach((slide, index) => {
               if (index === activeIndex) {
                   slide.classList.add("active-slide");
               } else {
                   slide.classList.remove("active-slide");
               }
           });
       }
   }
   customElements.define("custom-slider", CustomSlider);
}
