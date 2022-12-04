
const isIntersecting = (entry) => {

    return entry.isIntersecting;
}

const loadImage = (entry) => {
    const container = entry.target;
    const imagen = container.firstChild;
    const url = imagen.dataset.src

    // load image
    imagen.src = url;

    


    // Desregistra la imagen (unlisten)
    observer.unobserve(container);
};



const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
});


//
export const registerImage = (imagen) => {
    // intersectationObservador -> observer(imagen)
    observer.observe(imagen);
}
