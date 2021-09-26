import React from 'react';
import { Card } from 'react-bootstrap';

const Cartcost = (props) => {
    //Destructuring 
    const { salaries, count, names } = props;

    //counting total salary
    let total = 0;
    for (const salary of salaries) {
        total = total + salary;
    }
    return (
        <div>
            <Card className="shadow-lg pt-5 mt-5 bg-body rounded">
                <Card.Body >
                    <h3>Total Members: {count} </h3>
                    <h3>Total Cost: ${total} </h3>
                    <h4>Members Added:</h4>
                    <ul>
                        {
                            names.map(name => <li key={Math.floor(Math.random() * 999999)}>{name}</li>)
                        }
                    </ul>
                </Card.Body>
            </Card>


        </div>
    );
};

export default Cartcost;