export const getScrollPercent = (element) => {

    const scrollTop = window.scrollY;
    const winHeight = window.innerHeight;
    const docHeight = element.offsetHeight;
    const percentScrolled = Math.floor(scrollTop / (docHeight - winHeight) * 100) / 100
    
    return percentScrolled
}