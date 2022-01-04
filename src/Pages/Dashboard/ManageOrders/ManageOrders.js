import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageOrders = () => {
  const { user } = useAuth();

    const [itemOrder, setOrderItem] = useState([]);
  useEffect(() => {
    const url = `https://sleepy-stream-55149.herokuapp.com/orders`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrderItem(data));
  }, []);
//   const [orders, setOrders] = useState([]);

// useEffect(() => {
//   fetch('https://shielded-river-66834.herokuapp.com/order')
//       .then(res => res.json())
//       .then(dt => setOrders(dt))
// }, []);

// const handleOrderDelete = (id) => {
// const proceed = window.confirm("Are you sure wanna delete this car?");
// if (proceed) {
//   const url = `https://shielded-river-66834.herokuapp.com/order/${id}`;
//   fetch(url, {
//     method: "DELETE",
//   })
//     .then((res) => res.json())
//     .then((data) => {
//       if (data.deletedCount) {
//         const remaining = orders.filter((order) => order._id !== id);
//         setOrders(remaining);
//       }
//     });
// }
// };
 
  const handleDelete = (id) => {
    const url = `https://sleepy-stream-55149.herokuapp.com/orders/${id}`;
    fetch(url, {
        method: 'DELETE'
    })
    .then( res => res.json())
    .then( data => {
        console.log(data);
        if(data.deletedCount) {
          alert('Data Delete Successfully'); 
            const remaining = itemOrder.filter(pl => pl._id !==id)
            setOrderItem(remaining);
        }
    })
}
    return (
        <Table striped bordered hover variant="dark">
          <thead>
            <tr className="text-center">
              <th>Name</th>
              <th>Email</th>
              <th>Product</th>
              <th>Price</th>
              <th>Address</th>
              <th>Mobile</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {
              itemOrder.map(pl => 
                
                <tbody key ={pl._id}>
                <tr>
                    <td>{pl.name}</td>
                    <td>{pl.email}</td>
                    <td>{pl.product}</td>
                    <td>{pl.price}</td>
                    <td>{pl.address}</td>
                    <td>{pl.mobile}</td>
                    <td>{pl.status}</td>
                    <td className="text-center">
                    <button className="btn btn-danger me-2" onClick={ () => handleDelete(pl._id)}>Done</button>
                        <button className="btn btn-danger ms-2" onClick={ () => handleDelete(pl._id)}>Del</button>
                    </td>
                </tr>
            </tbody>
              )
            }
        </Table>
    );
};

export default ManageOrders;