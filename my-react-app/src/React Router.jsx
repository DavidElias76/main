
// react router ia a library for routing in react applications
// Routing means handling navigation between different views.

// NOTE: Without a router, your React application would be limited to a single page with no way to navigate between different views.

// npm install react-router-dom - to install react router dom
import { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter, Outlet, NavLink, useParams } from 'react-router-dom'; // import necessary components from react-router-dom

// React Router uses three main components for basic routing:

// Link / a tag: Creates navigation links that update the URL
// Routes: A container for all your route definitions
// Route: Defines a mapping between a URL path and a component

// Wrap Your App with BrowserRouter
// Your application must be wrapped with the (BrowserRouter tags) component to enable routing:

// create a nav links  for home page, content page and about page

// NOTE: The anchor tag reloads the page while the link tag doesnot reload the page 

// home page component
function Home(){
    return <h2>Home Page</h2>
}


// about page component
function About(){
    return <h2>About Page</h2>
}

function Services(){
    return <h2>Services Page</h2>
}

// Contact page Component
function Contact(){
    return <h2>Contact Page</h2>
}


const navStyles = {
    backgroundColor: "grey",
    padding: "20px 30px",
    display: "flex",
    gap: "20px",
    justifyContent: "space-between",
    alignItems: "center"
}
// there is an error in this react componenet
function RouterApp(){
    return (
        <>
            {/* Navigation */}
            <BrowserRouter>
                <nav style={navStyles}>
                    {/* The {''} gives space btw the links */}
                    {/* The link tag works the same as the anchor tag(a) */}
                    <Link to = "/" style={{textDecoration: "line"}}>Home</Link>
                    <Link to = "/about">About</Link>
                    <Link to = "/services">Services</Link>
                    <Link to = "/contact">Contact</Link>
                </nav>
                {/* Routes - container that holds the path of all the url */}
                 <Routes>
                    <Route path='/' element = {<Home/>}/> {/* This loads the default landing page */}
                    <Route path='/about' element = {<About/>}/> {/* This loads the about component */}
                    <Route path='/services' element = {<Services />}/> {/* This loads the about component */}
                    <Route path='/contact' element = {<Contact />}/> {/* This loads the content component */}
                 </Routes>
            </BrowserRouter>
        </>
    )
}

// Nested Routes

// import outlet to use nested routes
 function HomePage() {
  return <h1>Home Page</h1>;
}

// car products
function CarProducts() {
    return (
        <div>
      <h2>Cars</h2>
      <ul>
        <li>Audi</li>
        <li>BMW</li>
        <li>Volvo</li>
      </ul>
    </div>
  );
}

// bike products 
function BikeProducts() {
    return (
    <div>
      <h2>Bikes</h2>
      <ul>
        <li>Yamaha</li>
        <li>Suzuki</li>
        <li>Honda</li>
      </ul>
    </div>
  );
}

function ContactPage() {
    return <h1>Contact Page</h1>;
}

function Products(){
    return (
        <div>
            <h1>Products Page</h1>
            {/* this is the parent node of products */}
            <nav style={{marginBottom: "20px"}}>
                <Link to="/products/car">Cars</Link> |{" "}
                <Link to="/products/bike">Bikes</Link>
            </nav>
            <Outlet /> {/* This component specifies where to render the child route's content. - it tells Render the matched child route here*/}
        </div>
    )
}

function RouterApp2(){
    return (
        <BrowserRouter>
            {/* navigation */}
            <nav style={navStyles}>
             <Link to= "/">Home</Link>
             <Link to= "/products">Products</Link>
             <Link to= "/contact">Contact</Link>

            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />}>
                <Route path="car" element={<CarProducts />} /> {/* The car products will be displayed*/}
                <Route path="bike" element={<BikeProducts />} /> {/* The Bike products will be displayed*/}
            </Route>
            <Route path="/contact" element={<ContactPage />} />
            </Routes>
            </nav>
        </BrowserRouter>
    )
}

// Style Active Links

// There is a special version of the Link component called NavLink that knows whether the link's URL is "active" or not
// A NavLink is considered active if the current URL matches its to prop.

// NavLinks is important when using the naigation menu, breadcrumbs, tabs
// Note that we also need to import the NavLink component from 'react-router-dom'.


// Style function for active links or not active links - when the links are clicked the active state changes 
const navLinkStyles = ({ isActive }) => ({
    color: isActive ? '#007bff' : '#333',
    textDecoration: isActive ? 'none' : 'underline',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px'
});


function NewHome() {
  return <h1>Home Page</h1>;
}

function AboutPage() {
  return <h1>About Page</h1>;
}

function NewContact() {
  return <h1>Contact Page</h1>;
}

function RouterApp3(){
    return (
        <>
            <BrowserRouter>
                {/* Navigation with NavLink for active styling */}
                <nav style = {{marginBottom: "20px"}}>
                    <NavLink to= "/" style={navLinkStyles}>Home</NavLink>
                    <NavLink to= "/about" style={navLinkStyles}>About</NavLink> 
                    <NavLink to= "/contact" style={navLinkStyles}>Contact</NavLink> 
                </nav>

                {/* routes */}
                <Routes>
                    <Route path='/' element = {<NewHome/>}></Route>
                    <Route path='/about' element = {<AboutPage/>}></Route>
                    <Route path='/contact' element = {<NewContact />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

// react automatically passes an arugment isActive so that the styles can be applied which it is important to use the Navlink instead of link 
// NavLink calls the functon for you. You are handing the function to NavLink.
// so the argument is an object created by React Router.

// URL Parameters
// URL parameters are variables that you can add to your route paths. They are often used to pass data between components.
// URL parameters let you create dynamic routes where part of the URL can change. Think of them as variables in your URL.

// React Router provides the useParams hook to access these parameters in your components.

// import the useParams() from the react-router-dom 

function Info(){
    const {firstname} = useParams() // get the firstname to use it in the route path 
    return <h2>Hello, {firstname}!</h2>
}

function RouterApp4(){
    return (
        <>
            <BrowserRouter>
                <nav>
                    {/* when the user clicks, the name will be used as the parameter and passed in the infor compoanent as firstname */}
                    <Link to = "/customer/Emil">Emil</Link>
                    <Link to = "/customer/Tobias">Tobias</Link>
                    <Link to = "/customer/Linus">Linus</Link>
                </nav>

                {/* Routes */}
                <Routes>
                    <Route path='/customer/:firstname' element = {<Info />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}


// needs a recap 

export { RouterApp, RouterApp2, RouterApp3, RouterApp4};

