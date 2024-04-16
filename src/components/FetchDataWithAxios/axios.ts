import axios from "axios";

export const fetchUsers = async () => {
    try {
        const res =  await axios(
            'https://jsonplaceholder.typicode.com/users?_limit=5'
        );
        const users = await res.data;
        return users;
        
    } catch(error) {
        return (error as Error).message;
    }
};