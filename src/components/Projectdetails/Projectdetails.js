import React, { useEffect, useState } from 'react';
import Cartcost from './/../Cartcost/Cartcost'
import Developers from '../Developers/Developers';
const Projectdetails = () => {
    const [users, setUsers] = useState([]);
    const [salaries, setSalaries] = useState([]);
    const [count, setCount] = useState(0);
    const [name, setNames] = useState([]);
    useEffect(() => {
        fetch('./developers.JSON')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);
    const handleAddBudget = (user) => {
        user.isAdded = true;
        const newCount = count + 1;
        const newSalary = [...salaries, user.salary];
        const newName = [...name, user.name];
        setCount(newCount);
        setSalaries(newSalary);
        setNames(newName);
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
                    {/* <Cartcost count={count} salaries={salaries}></Cartcost> */}
                    <Cartcost name={name} count={count} salaries={salaries}></Cartcost>
                </div>
            </div>
        </div >
    );
};

export default Projectdetails;