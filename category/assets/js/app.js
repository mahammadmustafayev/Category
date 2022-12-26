let category= document.querySelectorAll(".category");
let product= document.querySelectorAll(".cate");

category.forEach(x => {
    x.addEventListener("click",function () {
        product.forEach(b => {
            b.classList.add("d-none")
            if (x.getAttribute("data-target")=="all") {
                b.classList.remove("d-none")
            }
            else if(x.getAttribute("data-target") == b.getAttribute("data-id")){
               b.classList.remove("d-none");
            }
        });
    })
});