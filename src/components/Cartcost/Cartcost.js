import React from 'react';
import { Card } from 'react-bootstrap';

const Cartcost = (props) => {
    //const { salaries, count } = props;
    const { salaries, count, name } = props;
    //console.log(props.name);
    let total = 0;
    for (const salary of salaries) {
        total = total + salary;
    }
    return (
        <div>
            <Card className="shadow-lg pt-5 mt-5 bg-body rounded">
                <Card.Body >
                    <h4>Players Added: {count} </h4>
                    <h4>Total Cost: ${total} </h4>
                    <h5>People Added:</h5>
                    <ul>
                        {
                            name.map(nam => <li>{nam}</li>)
                        }
                    </ul>

                </Card.Body>
            </Card>


        </div>
    );
};

export default Cartcost;