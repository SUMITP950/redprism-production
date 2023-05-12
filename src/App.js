import React, { useEffect, useState } from "react";

export default function App() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const url = "https://fakestoreapi.com/products";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setUsers(json);
        console.log(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div>
        {users.length > 0 && (
           <div className="container">
           <div className="row">
         
            {users.map((user, i) => (
              <>
               
                    <div className="col-md-4">
                    <h2>{user.category}</h2>
                    <div class="card" key={i}>
                      <img
                        src={user.image}
                        alt="Avatar"
                        style={{ width: "10%" }}
                      />
                      <div class="">
                        <h4>
                          <b>{user.title}</b>
                        </h4>
                        <p>{users.description}</p>
                      </div>
                    
                </div></div>
              </>
            ))}
         
          </div>
                  </div>
        )}
      </div>
    </>
  );
}
