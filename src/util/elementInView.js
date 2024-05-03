export const elementInView = (element) => {
    const { top, bottom } = element?.getBoundingClientRect();
    return (top >= 0) && (bottom <= window.innerHeight)
}
