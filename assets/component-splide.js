if(!customElements.get("custom-slider")) {
class CustomSlider extends HTMLElement{

   constructor(){
      super();
      this.element = this
      console.log(this)
      this.options = JSON.parse(this.element.dataset.sliderOptions);
      console.log(this.options);

      this.displaySliderShow()

   }

    displaySliderShow(){

      this.reviews =    new Splide(this.element, this.options).mount()
      this.imageSlide = new Splide("#display-image", {
         type: "fade",
         perPage:1
      }).mount()
      this.reviews.sync(this.imageSlide)
    }



  }
  customElements.define("custom-slider", CustomSlider)

}

  