import { useEffect } from 'react';

const useCarousel = () => {
    useEffect(() => {
        const initSlider = () => {
            const imageList = document.querySelector(".slider-wrapper .image-list");
            const slideButtons = document.querySelectorAll(".left-right-cont .img-slider-btn");

            slideButtons.forEach(button => {
                button.addEventListener("click", () => {
                    const direction = button.id === "left" ? -1 : 1;
                    const scrollAmount = imageList.clientWidth * direction;
                    imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });

                    if (direction === 1 && imageList.scrollLeft + imageList.clientWidth >= imageList.scrollWidth) {
                        imageList.scrollTo({ left: 0, behavior: "smooth" });
                    } else if (direction === -1 && imageList.scrollLeft === 0) {
                        imageList.scrollTo({ left: imageList.scrollWidth, behavior: "smooth" });
                    }
                });
            });
        };
        initSlider();
        return () => {
            const slideButtons = document.querySelectorAll(".left-right-cont .img-slider-btn");
            slideButtons.forEach(button => button.removeEventListener("click", initSlider));
        };
    }, []); 
};

export default useCarousel;
