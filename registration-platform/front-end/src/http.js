const API_URL="http://localhost:5038/";

export async function addUserDetails(data) {

    try{
        const jsonData = JSON.stringify(data);
        console.log(data)
        const response = await fetch(API_URL+"api/user", {
            method: 'POST',
            body: jsonData,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        const resData = await response.json();
    
        if(!response.ok) {
            throw new Error('Failed to update user data')
    
            return resData.message;
        }
    
        console.log('User data added successfully:', resData);
    }catch(error){
        console.error('Error adding user:', error);
    }
    
}