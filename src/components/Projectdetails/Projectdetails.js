import React, { useEffect, useState } from 'react';
import Cartcost from './/../Cartcost/Cartcost'
import Developers from '../Developers/Developers';
const Projectdetails = () => {
    // for showing all users data
    const [users, setUsers] = useState([]);
    // for showing members salaray and adding their salary
    const [salaries, setSalaries] = useState([]);
    // for countine counting
    const [count, setCount] = useState(0);
    //for displaying Members name
    const [names, setNames] = useState([]);

    //for getting data from JSON
    useEffect(() => {
        fetch('./developers.JSON')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    //this is add to cart button, it use to count, adding salay and add people
    const handleAddBudget = (user) => {
        user.isAdded = true;
        const newCount = count + 1;
        const newSalary = [...salaries, user.salary];
        const newNames = [...names, user.name];
        setCount(newCount);
        setSalaries(newSalary);
        setNames(newNames);
    }
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-9">
                    <div className="row">
                        {
                            users.map(user => <Developers
                                key={user.id}
                                user={user}
                                handleAddBudget={handleAddBudget}
                            ></Developers>)
                        }
                    </div>
                </div>
                <div className="col-md-3">
                    <Cartcost names={names} count={count} salaries={salaries}></Cartcost>
                </div>
            </div>
        </div >
    );
};

export default Projectdetails;