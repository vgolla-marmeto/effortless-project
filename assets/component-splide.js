if(!customElements.get("venkatesh-slider")) {
  console.log(customElements.get("venkatesh-slider"))
  console.log(!customElements.get("venkatesh-slider"))
class CustomSlider extends HTMLElement{

   constructor(){
      super();
      this.element = this
      this.options = JSON.parse(this.element.dataset.sliderOptions);
      console.log(this.options);

      this.displaySliderShow()

   }

    displaySliderShow(){

         new Splide(this.element, this.options).mount()
    }



  }
  customElements.define("venkatesh-slider", CustomSlider)

}

  