let currentUser = null;
let cart = [];
let books = [
  
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price:15, img:'Image1.jpg' },
    { id: 2, title: '1984', author: 'George Orwell', price:25, img:'imagesss2.jpg'},
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', price:20, img: 'image3.jpg' },
    { id: 4, title: 'Moby Dick', author: 'Herman Melville', price:25,  img:'image4.jpg' },
    { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', price:15,  img:'image5.webp' },
    { id: 6, title: 'War and Peace', author: 'Leo Tolstoy', price:19,  img:'Image.6.jpg' },
    { id: 7, title: 'The Catcher in the Rye', author: 'J.D. Salinger', price:25,  img:'Image7.jpg' },
    { id: 8, title: 'The Odyssey', author: 'Homer', price:30,  img: 'Image8.jpg' },
    { id: 9, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', price:35,  img:'image9.jpg' },
    { id: 10, title: 'Animal Farm', author: 'George Orwell', price:12,  img:'Image10.jpg' },
    { id: 11, title: 'Jane Eyre', author: 'Charlotte Brontë',  price:13, img:'imagess11.jpg' },
    { id: 12, title: 'Brave New World', author: 'Aldous Huxley', price:14,  img:'image12.jpg' },
    { id: 13, title: 'The Divine Comedy', author: 'Dante Alighieri', price:30,  img:'image13.jpg' },
    { id: 14, title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky',  price:35, img:'Image14.jpg' },
    { id: 15, title: 'Don Quixote', author: 'Miguel de Cervantes',  price:12, img:'image15.jpg' },
    { id: 16, title: 'Crime and Punishment', author: 'Fyodor Dostoevsky',  price:14, img:'imagesss16.jpg' },
    { id: 17, title: 'Ulysses', author: 'James Joyce', price:15,  img:'image17.jpg' },
    { id: 18, title: 'Frankenstein', author: 'Mary Shelley', price:10,  img:'image18.jpg' },
    { id: 19, title: 'Wuthering Heights', author: 'Emily Brontë',  price:15, img:'imagess19.jpg' },
    { id: 20, title: 'Dracula', author: 'Bram Stoker', price:15,  img:'image20.jpg' },


    
];





// Login Functionality
document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    
    if (username === "user" && password === "password") {
        currentUser = username;
        document.getElementById("login-page").style.display = "none";
        document.getElementById("home-page").style.display = "block";
        displayBooks();
    } else {
        alert("Invalid credentials!");
    }
});

// Display Books on Home Page
function displayBooks() {
    let bookList = document.getElementById("book-list");
    bookList.innerHTML = "";
    books.forEach(book => {
        let bookCard = document.createElement("div");
        bookCard.classList.add("book-card");
        bookCard.innerHTML = `
            <img src="${book.img}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>$${book.price}</p>
            <button onclick="addToCart(${book.id})">Add to Cart</button>
        `;
        bookList.appendChild(bookCard);
    });

}

// Add to Cart
function addToCart(bookId) {
    let book = books.find(b => b.id === bookId);
    if (book) {
        cart.push(book);
        updateCart();
    }
}

// Update Cart
function updateCart() {
    let cartTotal = 0;
    cart.forEach(book => {
        cartTotal += book.price;
    });
    document.getElementById("cart-total").innerText = cartTotal.toFixed(2);

    let cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = "";
    cart.forEach((book, index) => {
        let listItem = document.createElement("li");
        listItem.innerHTML = `${book.title} - $${book.price} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartItemsList.appendChild(listItem);
    });
}

// Remove from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// View Cart
function viewCart() {
    document.getElementById("cart-modal").style.display = "flex";
}

// Close Cart
function closeCart() {
    document.getElementById("cart-modal").style.display = "none";
}

// Checkout
function checkout() {
    alert("Proceeding to checkout...");
}
