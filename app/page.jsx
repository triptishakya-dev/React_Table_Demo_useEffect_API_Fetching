 "use client"
 import React, { useEffect, useState } from "react";
import axios from "axios";

const Page = () => {
  const [myData, setMyData] = useState([]);

  const getApiData = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">User Table</h2>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2 text-left text-black">ID</th>
              <th className="border px-4 py-2 text-left text-black">Name</th>
              <th className="border px-4 py-2 text-left text-black">Email</th>
              <th className="border px-4 py-2 text-left text-black">City</th>
            </tr>
          </thead>

          <tbody>
            {myData.map((user) => (
              <tr key={user.id} >
                <td className="border px-4 py-2">{user.id}</td>
                <td className="border px-4 py-2">{user.name}</td>
                <td className="border px-4 py-2">{user.email}</td>
                <td className="border px-4 py-2">{user.address.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
