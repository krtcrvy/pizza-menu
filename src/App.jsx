const pizzaData = [
	{
		name: "Focaccia",
		ingredients: "Bread with italian olive oil and rosemary",
		price: 6,
		photoName: "images/pizzas/focaccia.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Margherita",
		ingredients: "Tomato and mozarella",
		price: 10,
		photoName: "images/pizzas/margherita.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Spinaci",
		ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
		price: 12,
		photoName: "images/pizzas/spinaci.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Funghi",
		ingredients: "Tomato, mozarella, mushrooms, and onion",
		price: 12,
		photoName: "images/pizzas/funghi.jpg",
		soldOut: false,
	},
	{
		name: "Pizza Salamino",
		ingredients: "Tomato, mozarella, and pepperoni",
		price: 15,
		photoName: "images/pizzas/salamino.jpg",
		soldOut: true,
	},
	{
		name: "Pizza Prosciutto",
		ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
		price: 18,
		photoName: "images/pizzas/prosciutto.jpg",
		soldOut: false,
	},
];

const App = () => {
	return (
		<div className="container">
			<Header />
			<Menu />
			<Footer />
		</div>
	);
};

const Header = () => {
	// const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
	return (
		<header className="header">
			<h1>Fast React Pizza Co.</h1>
		</header>
	);
};

const Menu = () => {
	return (
		<main className="menu">
			<h2>Our menu</h2>
			<Pizza />
			<Pizza />
			<Pizza />
		</main>
	);
};

const Footer = () => {
	const hour = new Date().getHours();
	const openHour = 12;
	const closeHour = 22;
	const isOpen = hour >= openHour && hour <= closeHour;
	console.log(isOpen);

	// if (hour >= openHour && hour <= closeHour) alert("We're currently open!");
	// else alert("Sorry we're closed!");

	return (
		<footer className="footer">
			{new Date().toLocaleTimeString()} We're currently open!
		</footer>
	);
};

const Pizza = () => {
	return (
		<div>
			<img src="images/pizzas/spinaci.jpg" alt="Pizza spinaci" />
			<h3>Pizza Spinaci</h3>
			<p>Tomato, mozarella, spinach, and ricotta cheese</p>
		</div>
	);
};

export default App;
