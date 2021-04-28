import React from 'react';
import { Link } from 'react-router-dom';
import data from './data';

function Fulfillment() {
    return (
        <div className= "content content-margined">
            <div className="fulfillment-header">
                <h3>Fulfillment</h3>
            </div>
            <div className="fulfillment-list">
                <table className="ftable">
                   <thead>
                       <tr>
                           <th>ORDER ID</th>
                           <th>SHIPPED</th>
                           <th>SHIPPED AT</th>
                           <th>DELIVERED</th>
                           <th>DELIVERED AT</th>
                       </tr>
                   </thead>
                   <tbody>
                      {data.fulfillment.map(Fulfillment => (<tr className={Fulfillment.isShipped.toString()} key={Fulfillment._id}>
                   <td>{Fulfillment._id}</td>
                   <td>{Fulfillment.isShipped.toString()}</td>
                   <td>{Fulfillment.shippedAt}</td>
                   <td>{Fulfillment.isDelivered.toString()}</td>
                   <td>{Fulfillment.deliveredDate}</td>
                      </tr>))}
                   </tbody>
                </table>
            </div>
        </div>);
};


export default Fulfillment;