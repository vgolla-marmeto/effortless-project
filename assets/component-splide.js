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
               var activeIndex = reviews.index;
              try{
               if (slide !== undefined){
                  console.log("active slide")
                  var color = slide.dataset.active 
                  console.log(activeIndex, color)
               }
               else {
                  console.log("not found")
               }

              }
              catch(e){
               console.log(e)
              }
           });

           // Trigger the "active" event for the initial slide
         //   reviews.emit("active", reviews.Components.Elements.slides[0]);


}
}
  customElements.define("custom-slider", CustomSlider)

}

  