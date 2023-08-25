
const display = (data) => {
    document.getElementById("box2").innerHTML = ''
    data.map((product) => {
        let img = document.createElement("img");
        img.src = product.image
        let title = document.createElement("h3");
        title.innerHTML = product.title
        let description = document.createElement("p");
        description.innerHTML = product.description
        let author = document.createElement("p");
        author.innerHTML = product.author
        let country = document.createElement("p");
        country.innerHTML = product.country
        let btn = document.createElement("button");
        btn.innerHTML = "Buy Now"
        let div = document.createElement("div");
        div.append(img, title, description, author, country, btn)
        document.getElementById("box2").append(div);
    });
}

let products;

fetch("http://localhost:3000/news")
    .then((response) => response.json())
    .then((response) => {
        products = response;
        display(products);
 });


// Search by category
const find = () => {
    let value = document.getElementById("value").value.toLowerCase();
    let data = products.filter((val) => val.country.toLowerCase().includes(value));
    display(data);
};

document.getElementById("value").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        find();
    }
});

document.getElementById("search").addEventListener("click", find);

// Search by category
const findes = () => {
    let values = document.getElementById("values").value.toLowerCase();
    let data = products.filter((val) => val.author.toLowerCase().includes(values));
    display(data);
};

document.getElementById("values").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        findes();
    }
});

document.getElementById("searches").addEventListener("click", findes);





