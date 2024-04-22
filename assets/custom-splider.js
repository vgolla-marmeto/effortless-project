if (!customElements.get("splider-component")) {
class CustomSlider extends HTMLElement {
    constructor() {
      super();
      this.element = this;
      console.log(this.element)
      this.options = JSON.parse(this.element.dataset.sliderSettings);
      this.mountSplider()
    }
  
    mountSplider() {
      new Splide(this.element,this.options).mount();
    }
  }
  
  customElements.define("splider-component", CustomSlider);
}