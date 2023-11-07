// this how we import the other parts of the project
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


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
        <div className="container">
            <h1>Sohrab momand</h1>
            <Header />
            <Menu />
            <Footer />
        </div>
    );
}


function Header() {
    const style = {};

    return (
        <div className="header">
            <h1 style={style}>Fast React Pizza Co.</h1>
        </div>
    );
}



function Menu() {
    return (
        <main className="menu">
            <h2>Our Menu</h2>

            <ul className="pizzas">
                {pizzaData.map((pizza) => (
                    <Pizza pizzaobject={pizza} key={pizza.name} />
                ))}
            </ul>


            {/* <Pizza
                name="pizza Spicnaci" ingredients="Bread with italian olive oil and rosemary" photoName="pizzas/salamino.jpg" price={20}
            />


            <Pizza
                name="pizza Spicnaci" ingredients="Bread with italian olive oil and rosemary" photoName="pizzas/salamino.jpg" price={10}
            /> */}
        </main>
    );
}



function Pizza(props) {
    console.log(props);
    return (
        <li className="pizza">
            <img src={props.pizzaobject.photoName} alt={props.name} />
            <div>
                <h3>{props.pizzaobject.name}</h3>
                <p> {props.pizzaobject.ingredients}</p>
                <span>{props.pizzaobject.price + 3}</span>
            </div>

        </li>
    )
}



function Footer() {

    const hour = new Date().getHours();
    const openHours = 12;
    const closeHours = 12;
    const isOpen = hour >= openHours && hour <= closeHours;



    return (
        <footer className="footer">
            {isOpen && (
                <div className="order">
                    <p>
                        We are open until {closeHours}:00. order Online
                    </p>
                    <button className="btn"></button>
                </div>
            )}
        </footer>
    );
}











const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

