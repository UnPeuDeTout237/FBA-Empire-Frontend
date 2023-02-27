import React from 'react'
import { Link,Outlet } from "react-router-dom"



const Button = ({contain = "Crédité un compte" , navigation = "../crediter/Ambassadeur"}) => {
  return (
    <>
        <Link to={navigation} type="button" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{contain}</Link>
    </>
  );
}

export default Button;
