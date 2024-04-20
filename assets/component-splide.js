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

         //    reviews.on("active", (slide) => { // Use arrow function to retain the context of `this`
         //       // var activeIndex = reviews.index;
         //       // var color = slide.dataset.active 
         //       console.log(slide)
         //   });

           this.reviews = reviews; // Store reviews instance as a property of the class

           this.reviews.on("move",()=>{
            let activeEl = document.querySelector(".splide__list .is-active")
            console.log(activeEl)
            let activeColor = activeEl.dataset.active;
            console.log(activeColor)
           })

           // Trigger the "active" event for the initial slide
         //   reviews.emit("active", reviews.Components.Elements.slides[0]);


}
}
  customElements.define("custom-slider", CustomSlider)

}

  