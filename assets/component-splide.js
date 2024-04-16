class SpliderComponent extends HTMLElement{

constructor(){

    super()


    this.spliderComp = document.querySelector(".splide")
    this.options = JSON.parse(this.spliderComp.dataset.sliderSettings)
    console.log(this.options)
    this.intializeSlider()

}

   intializeSlider(){

     let caurosal = new Splide('.splide',this.options).mount();
   }



}


customElements.define('slide-component', SpliderComponent)