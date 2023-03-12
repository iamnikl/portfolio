interface BlogPost {
    id:number,
    author:string,
    date:any,
    title:string,
    subheader:string | null,
    content:string[],
    comments:any,
    likes:number,
    image:any,
    categorys: string[]
}

export const blogposts:BlogPost[] = [
    {
        id:1,
        author: "iamnikl",
        date: "9.3.2023",
        title: "Game Dev",
        subheader: "I gained a certificate!",
        content: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque perferendis enim a quia error voluptates, consectetur cumque mollitia sapiente ratione unde! Officia dolore totam pariatur accusamus nobis! Culpa, aut.", "Thanks for reading!"],
        comments: "",
        likes: 0,
        image: "https://th.bing.com/th/id/R.2374ddc62c180e3c1dbf8a8da8ba41f4?rik=u8pdzLkeKHo%2baA&riu=http%3a%2f%2fimages.pushsquare.com%2fscreenshots%2f61470%2flarge.jpg&ehk=DLKYZ9HdcJM7Ld6PVimmPtSBg2wRX2%2b5JOC%2fY63CDeQ%3d&risl=&pid=ImgRaw&r=0",
        categorys: ["js"]
    },
    {
        id:2,
        author: "iamnikl",
        date: "10.3.2023",
        title: "Blog public!",
        subheader: "We published the first BLOG BETA",
        content: ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eaque perferendis enim a quia error voluptates, consectetur cumque mollitia sapiente ratione unde! Officia dolore totam pariatur accusamus nobis! Culpa, aut.", "Thanks for reading!"],
        comments: "",
        likes: 0,
        image: "/img/start-page/ts.png",
        categorys: ["ts"]
    },
]
export function getJsonPost(postId:number) {
    for(let post of blogposts) {
        if(post.id === postId) {
            return post;
        }
    }
}
export const templatePost:BlogPost =
{
    id:1,
    author: "",
    date: "",
    title: "",
    subheader: "Error",
    content: [""],
    comments: "",
    likes: 0,
    image: "",
    categorys: [""]
}

export function setOpeningListeners() {
    document.querySelectorAll(".blog-article").forEach((el) => {
        el.addEventListener("click", () => {
            let postid:any = el.querySelector("h1 span")?.getAttribute("data-post-id");
            window.location.href = `blog/post/?post-id=${postid}`
        })
    })
    // filters
    document.querySelector(".blog-categorys")?.addEventListener("click", (event) => {
        let filterElID = event.target;
        //@ts-ignore
        filterPosts(filterElID.id)
    })
}

function filterPosts(filterID:string) {
    let filter:string = filterID.slice(7);
    const blogFrame = document.querySelector(".blog-start-frame");

    if(filter == "none") {
        blogFrame?.querySelectorAll(".blog-article").forEach(element => {
            // @ts-ignore
            element.style.display = "block";
        });
    }else {
        blogFrame?.querySelectorAll(".blog-article").forEach(element => {
            // @ts-ignore
            element.style.display = "none";
        });    
    }
    
    blogposts.forEach((post) => {
        if(post.categorys.includes(filter)) {
            document.querySelectorAll(".blog-article").forEach((el) => {
                if(el.querySelector("h1 span")?.getAttribute("data-post-id") == post.id.toString()) {
                    //@ts-ignore
                    el.style.display = "block";
                }
            })
        }
    })
    
}