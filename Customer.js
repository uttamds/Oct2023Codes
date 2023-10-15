import React, { useState } from "react";

function Customer() {
  const [reg_customers, setReg_customers] = useState([
    { id: 1, name: "Uttam", phone: "2343244234", prime: false },
    { id: 2, name: "Kiran", phone: "999999999", prime: true },
    { id: 3, name: "Manish", phone: "445656565", prime: false },
  ]);

  const togglePrime = (reg_cus) => {
    const new_reg_cus = reg_customers.map((rc) =>
      rc.prime === reg_cus.prime  ? { ...rc, prime: !rc.prime } : rc
    );
    setReg_customers(new_reg_cus);
  };
  const reg_customers_list = reg_customers.map((reg_cus) => (
    <li
      key={reg_cus.id}
      style={{
        color: reg_cus.prime ? "red" : "blue",
      }}
    >
      Customer Name = {reg_cus.name} Phone = {reg_cus.phone} 
      
    </li>
  ));
  return (
    <div>
      Prime Customer: red
      <br />
      Non Prime: blue
      <ul>{reg_customers_list}</ul>
    </div>
  );
}

export default Customer;
