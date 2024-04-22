if (!customElements.get("custom-slider")) {
    class CustomSlider extends HTMLElement {
        constructor() {
            super();
            this.element = this;
            this.options = JSON.parse(this.element.dataset.sliderOptions)
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

            reviews.on("move", (newIndex, oldIndex, destIndex) => {
                this.toggleActiveClass(reviews.Components.Elements.slides, newIndex);
            });

            this.reviews = reviews;
            this.toggleActiveClass(reviews.Components.Elements.slides, 0); // Apply initial colors
        }

        toggleActiveClass(slides, activeIndex) {
            slides.forEach((slide, index) => {
                if (index === activeIndex) {
                    slide.querySelector(".custom-testimonials--slide").classList.add(`active-slide-${activeIndex}`);
                    slide.querySelector(".custom-testimonials--slide").classList.remove(`normal-color-${index}`);
                } else {
                    slide.querySelector(".custom-testimonials--slide").classList.remove(`active-slide-${index}`);
                    slide.querySelector(".custom-testimonials--slide").classList.add(`normal-color-${index}`);
                }
            });
        }
    }
    customElements.define("custom-slider", CustomSlider);
}
