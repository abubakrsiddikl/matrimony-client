import axios from "axios";

// save user data to db
export const saveUser = async (user) => {
  // save user to db
  const data = await axios.post(`http://localhost:5000/users/${user?.email}`, {
    name: user?.displayName,
    image: user?.photoURL,
    email: user?.email,
  })
}
