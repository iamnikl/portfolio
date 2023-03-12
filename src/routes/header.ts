export function openDetailsList() {
    // @ts-ignore
    let el = document.getElementById(this.getAttribute("id")); 
    el?.setAttribute("open", "");
}
export function closeDetailsList() {
    // @ts-ignore
    document.getElementById(this.getAttribute("id"))?.removeAttribute("open")
}