import axios from "axios";

// save user data to db
export const saveUser = async (user) => {
  // save user to db
  const data = await axios.post(`https://matrimony-final-server.vercel.app/users/${user?.email}`, {
    name: user?.displayName,
    image: user?.photoURL,
    email: user?.email,
  })
}
