import React, {useState,useEffect } from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Spinner from '../../components/UI/Spinner/Spinner'
const Orders=props=>  {   
 const [orders,setOrders]=useState(null)
 const[loading,setLoading]=useState(true)
    useEffect(()=> {
        axios.get('/orders.json')
            .then(res => {
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                setOrders(fetchedOrders)
                setLoading(false)
               // this.setState({loading: false, orders: fetchedOrders});
            })
            .catch(err => {
                setLoading(false)
               // this.setState({loading: false});
            });
    }
    )
    let ordersRender = <Spinner />;
    if (!loading) {
        ordersRender = (
            <div>
            {orders.map(order => (
              <Order key={order.id} ingredients={order.ingredients} price={order.price} />
            ))}
          </div>
        );
            }
            return ordersRender;
    }
    
export default withErrorHandler(Orders, axios);