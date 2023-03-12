export default function runMain() {
    runAnimations();
    const usesDarkMode =  window.matchMedia("(prefers-color-scheme: dark)").matches;
    if(usesDarkMode) {
        // 
    }
}
function changeStyle(el:string ,type:string, change:string | number) {
    const element = document.querySelector(el);
    // @ts-ignore
    element.style[type] = change;
    
}
function runAnimations() {
    function typewriter(node:any, text:string) {
        node.textContent = null;

        let speed:number = 150; //Milliseconds
        let index:number = 0;

        for(let character of text) {
            setTimeout(()=> {
                node.textContent += character;
                if(node.textContent.length == text.length){
                    setTimeout(()=> {
                        changeStyle("hgroup h1", "font-family", "Poppins-Extra-Bold")
                    },  1000)
                }
            }, index * speed);
            index++
        }
    }
    typewriter(document.querySelector("hgroup h1"), "iamnikl")
}
interface StartInformations {
    header:string,
    textContent:string,
    image:any,
    codeFileName:string,
    codeContent:string | string[] | any,
    programmingLangClass:string | []
}
export const StartInformations:StartInformations[] = [
    {
        header: "JavaScript",
        textContent: "The language of the modern web",
        image: "/img/js.png",
        codeFileName: "app.js",
        codeContent: 
        [`const name = “iamnikl“;`, "console.log(`My name is ${name}!`)"],
        programmingLangClass: ""
    },
    {
        header: "TypeScript",
        textContent: "The perfect superset of JavaScript",
        image: false,
        codeFileName: "app.ts",
        codeContent: ["const name:string = “iamnikl“;","console.log(`My name is ${name}!`)"],
        programmingLangClass: ""
    },
    {
        header: "SvelteKit",
        textContent: "A lightweight and easy-to-learn JavaScript Web Framework",
        image: false,
        codeFileName: "+page.svelte",
        codeContent: ["<script>","let name = “iamnikl“;","</script>","<h1>My name is {name}</h1>"],
        programmingLangClass: ""
    },
    {
        header: "HTML",
        textContent: "Hyper Text Markup Language structures your website",
        image: false,
        codeFileName: "index.html",
        codeContent: ["<h1>My name is iamnikl!</h1>"],
        programmingLangClass: ""
    },
    {
        header: "CSS",
        textContent: "With CSS, you can add some style definitions to your personal page",
        image: false,
        codeFileName: "style.css",
        codeContent: ["h1 {","font-size: 2.3rem","color: red;","background-color: #222233;","}"],
        programmingLangClass: ""
    },
    {
        header: "SCSS / SASS",
        textContent: "SCSS and SASS are powerful extensions for CSS including new features like Nesting and Functions",
        image: false,
        codeFileName: "style.scss",
        codeContent: ["h1 { ","background-color: rgb(40, 40, 40);"," .name {color: blue}","}"],
        programmingLangClass: ""
    },
    {
        header: "Python",
        textContent: "Python is one of the most-loved programming languages in the World. It`s mostly used for Data-Analytics and Backend Servers",
        image: false,
        codeFileName: "main.py",
        codeContent: [`name = "iamnikl"`,`print("My name is "+name)`],
        programmingLangClass: ""
    },
]
