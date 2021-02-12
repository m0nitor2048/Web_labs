import React, {useState, useEffect} from 'react';
import ContainerProducts from "../components/MainContent/ContainerProducts";
import {Button, Col, Container, Form, FormControl, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import ProductsItem from "../components/elements/ProductsItem";
import {HiArrowNarrowRight} from "react-icons/all";

import firebase from "firebase";
import {Route} from "react-router-dom";


function Products(props) {
    const [products, setProducts] = useState([])
    const [query, setQuery] = useState(false)

    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [filter, setFilter] = useState('')


    useEffect(() => {
        let arr = []
        const fetchData = () => {
            setLoading(true)
            const db = firebase.firestore()
             db.collection("products").get()
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        let prodObj = {
                            "id": doc.id,
                            "category": doc.data().category,
                            "name": doc.data().name,
                            "image": doc.data().image,
                            "price": doc.data().price,
                            "oldPrice": doc.data().oldPrice

                        }
                        arr.push(prodObj)
                        console.log("data ready")
                    });
                    console.log("kkkkkkkkkk")
                    setProducts(arr)
                }).then(() =>{
                 setLoading(false)
                 setQuery((prevQuery) => prevQuery = !prevQuery)
                 })
            console.log(products)


        }
        fetchData()

    },[])

    useEffect(() => {
        setFilteredProducts(
            products.filter((product) =>
                product.name.toLowerCase().includes(search.toLowerCase())
            )
        );
    }, [search, products]);

    useEffect(() => {
        setFilteredProducts(
            products.filter((product) =>
                product.category.toLowerCase().includes(filter.toLowerCase())
            )
        );
    }, [filter, products]);

    if (loading) {
        return <div className="loader">Loading...</div>;
    }

    return (
        <>
            <div className="title__element header_bg ">
                <div className="title__element_title justify-content-center align-self-center h-100 d-flex">
                    <h2 className="text-capitalize ">Products</h2>
                </div>
            </div>

            <div className="container__products container_margin">
                <Container>
                    <Navbar bg="light" expand="lg" className="mb-5">
                        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <select name="filter" className="filter-block"
                                        onChange={(e) => {
                                            setFilter(e.target.value)}}>
                                    <option id="sortOption"></option>
                                    <option id="sortOption" value="Vodka">Vodka</option>
                                    <option id="sortOption" value="Brandy">Brandy</option>
                                    <option id="sortOption" value="Rum">Rum</option>
                                    <option id="sortOption" value="Whiskey">Whiskey</option>
                                    <option id="sortOption" value="Tequila">Tequila</option>

                                </select>
                            </Nav>
                            <Form inline>
                                <input
                                    id="search_input"
                                    className="form-control mr-4 mt-0 mb-0"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    onChange={(e) =>
                                        setFilter(e.target.value)}
                                />
                                {/*<button*/}
                                {/*    id="search_button"*/}
                                {/*    className="btn btn-outline-primary mt-2 ml-2 pl-4 pr-4"*/}
                                {/*    type="submit"*/}
                                {/*    onClick={searchFunction}*/}
                                {/*>*/}
                                {/*    Search*/}
                                {/*</button>*/}
                                {/*<FormControl type="text" placeholder="Search" className="mr-sm-2" />*/}
                                {/*<Button variant="outline-success">Search</Button>*/}
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                    {console.log("renderrrrrrrrr")}
                    <Row>

                        {filteredProducts.map(({category, name, image, price, oldPrice=""}, idx) => (
                            <ProductsItem
                                category={category}
                                name={name}
                                imageSrc={image}
                                price={price}
                                oldPrice={oldPrice}
                                key={idx}
                            />
                        ))}
                        {/*{products.map(({category, name, image, price, oldPrice=""}, id) => (*/}
                        {/*    <ProductsItem*/}
                        {/*        category={category}*/}
                        {/*        name={name}*/}
                        {/*        imageSrc={image}*/}
                        {/*        price={price}*/}
                        {/*        oldPrice={oldPrice}*/}
                        {/*        key={id}*/}
                        {/*    />*/}
                        {/*))}*/}
                    </Row>

                </Container>
            </div>
        </>
    );
}

export default Products;