import { storeData } from '../Utils/storage';

const API_URL = 'https://10.68.114.197';

export const loginUser = async (email: string, password: string) => {
    try {
        const response = await fetch(`${API_URL}/api/login`, {
                method: 'Post',
                headers: {
                        'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                        email: email,
                        password: password
                })

                
        });
        console.log('RESPONSE');
        console.log(response);
        const data = await response.json();
        if(response.ok && data.access_token){
            await storeData('authToken', data.access_token);
            await storeData('user', data.user);
            return {'success': true, 'message': 'Usuario ingresado'};
        }
        

        return {'success': false,message: data.msg || 'error'};

    } catch (error) {
        return {'success': false, menssage: 'Error al ingresar'};
        
    }
}