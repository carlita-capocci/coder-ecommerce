import React from "react";
import firebase from "firebase/app";

import { getFirestore } from "../firebase";
import Shopping from "./Shopping";

const addOrder = (order) => {
  const db = getFirestore();
  const pedido = db.collection("orders");
  order.date = firebase.firestore.Timestamp.fromDate(new Date());
  const res = pedido.add(order);
  return res
    .then((order) => order.get())
    .then((order) => {
      const orderData = order.data()
      return {
        ...orderData,
        id: order.id,
        date: orderData.date.toDate(),
      };
    });
};

function ShoppingContainer() {
  return <Shopping onOrder={addOrder} />;
}

export default ShoppingContainer;
