import React from 'react'

import {useLocation, Link} from "react-router-dom"

const SubmissionPage = () => {
    const location = useLocation();
    const {firstName, lastName, email , contact, gender , address , city , image} = location.state;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg" >
        <h2 className="text-2xl font-bold mb-6 text-center">Submitted Details</h2>
        <div className="space-y-4">
            <p> <strong>First Name : </strong> {firstName}  </p>
            <p> <strong>Last Name : </strong> {lastName}  </p>
            <p> <strong>Email : </strong> {email}  </p>
            <p> <strong>Contact : </strong> {contact}  </p>
            <p> <strong>Gender : </strong> {gender}  </p>
            <p> <strong>Address : </strong> {address}  </p>
            <p> <strong>City : </strong> {city}  </p>
            {image && <img src={URL.createObjectURL(image[0])} alt="Uploaded"  className="mt-4" />}
        </div>
        <div className="mt-6 text-center">
            <Link to="/" className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition">
                go back
            </Link>
        </div>
    </div>
  )
}

export default SubmissionPage
