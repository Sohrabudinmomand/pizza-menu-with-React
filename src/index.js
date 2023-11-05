import React from "react";
import ReactDOM from "react-dom/client";

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];



function App() {
    return (
        <div>
            <h1>Sohrab momand</h1>;
            <Header />
            <Menu />
            <Footer />

        </div>
    );
}


function Header() {
    return <h1>Sohrab momand Pizza Co.</h1>
}

function Menu() {
    return (
        <div>
            <h1>Our Menu</h1>
            <Pizza />
            <Pizza />
            <Pizza />
        </div>
    );
}

function Footer() {

    const hour = new Date().getHours();
    const openHours = 12;

    const closeHours = 12;

    const isOpen = hour >= openHours & hour <= closeHours;

    console.log(isOpen);

    // if (hour >= openHours && hour <= closeHours) alert("We are currnetly we are open"); else alert("we are not open");


    return (
        <footer>{new Date().toLocaleTimeString()}. We are currently Open boys</footer>
    );
}



function Pizza() {
    return (
        <div>
            <img src="pizzas/spinaci.jpg" alt="spinaci pizza" />
            <h2>cheiken Pizza</h2>
            <p>Bread with italian olive oil and rosemary</p>
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<React.StrictMode>
    <App />
</React.StrictMode>
);



// Root.render(<App />);