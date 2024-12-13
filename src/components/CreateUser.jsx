import React, { useState } from "react";
import apiFacade from "../apiFacade";
function CreateUser() {
        
      const [createUser, setcreateUser] = useState({});
    
  
      // Handle form input change
      const handleChange = (event) => {
        const { id, value } = event.target;
        setcreateUser({
          ...createUser,
          [id]: value,
        });
      };
    
      // Handle form submission
      const handleSubmit = async (event) => {
        event.preventDefault()
        console.log("Created User :",  createUser);
     
        try {
          const response = await apiFacade.fetchData("/auth/register/", setcreateUser, "POST", true, createUser); // !!!!!!! Added formData as an argument to send it as the body
          console.log("Recipe created successfully:", data);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const data = await response.json(); // Parse the JSON response
          console.log("User created successfully:", data);
        } catch (error) {
          console.error("Error creating user:", error);
        }
      };
      
    
      return (
        <div>
          <h2>Create a New user</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={createUser.username}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="password">password:</label>
              <input
                id="password"
                value={createUser.password}
                onChange={handleChange}
                required
              />
            </div>
            
        
            <button type="submit">Create User</button>
          </form>
          <p></p>
        </div>
      );
    }
    

export default CreateUser;