import {useEffect, useState} from 'react'
import { User } from '@/types/User'

const APi_URL = 'https://jsonplaceholder.typicode.com/users';

export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]); // resivir un arreglo o objeto con los datos de los usuarios
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);



    const fetchUsers = async () => {
        try{
            const response = await fetch(APi_URL);
            const data: User[] = await response.json();
            setUsers(data);

        } catch (error) {
            setError('Error al cargar los usuarios');
            
        } finally {
            setLoading(false);
            
        }
    }

     useEffect(() => {
        fetchUsers();
    }, []);
    

  return  {users, loading, error}
}

