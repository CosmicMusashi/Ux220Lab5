class JoshElement extends HtmlElement{
    connectedCallback(){
        this.innerHTML = "Josh was here";
    }
}

customElements.define("x-josh", JoshElement);