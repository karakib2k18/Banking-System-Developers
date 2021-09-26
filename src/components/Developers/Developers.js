import React from 'react';
import "./Developers.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Button, Card } from 'react-bootstrap';

const Developers = (props) => {
    //for Destructuring all data 
    const { name, gender, role, img, salary, age, country, experience, isAdded } = props.user;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="col-md-4 mt-3">
            <Card className="shadow-lg p-3 mb-3 bg-body rounded">
                <Card.Img variant="top" className="rounded-circle" src={img} style={{ height: '16rem' }} />
                <Card.Body className="fs-5 p-edit">
                    <p>Name: {name} </p>
                    <p>Age: {age}</p>
                    <p>Gender: {gender}</p>
                    <p>Salary: {salary}</p>
                    <p>Role: {role}</p>
                    <p>Country: {country}</p>
                    <p>Experience: {experience}</p>

                    {
                        // ADD to cart and Already added functionality add in this button
                        isAdded ? <Button variant="danger"><span className="ps-2 fw-bolder">Already Added  </span></Button> : <Button onClick={() => props.handleAddBudget(props.user)} variant="warning">{element} <span className="ps-2 fw-bolder">Add to Cart</span></Button>
                    }

                </Card.Body>
            </Card>

        </div>

    );
};

export default Developers;