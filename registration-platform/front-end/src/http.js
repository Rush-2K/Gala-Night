const API_URL="http://localhost:5038/";

//add user
export async function addUserDetails(data) {

    try{
        const jsonData = JSON.stringify(data);
        // console.log(data)
        const response = await fetch(API_URL+"api/user", {
            method: 'POST',
            body: jsonData,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    
        const resData = await response.json(); //convert response object to javascript object
    
        if(!response.ok) {
            throw new Error('Failed to update user data')
        }
    
        console.log('User data added successfully:', resData);
    }catch(error){
        console.error('Error adding user:', error);
    }
    
}

//fetch table
export async function fetchAllTable() {

    try {
        const response = await fetch(API_URL+"api/tables", {
            method: 'GET',
        });

        const resData = await response.json();

        if(!response.ok) {
            throw new Error('Failed to fetch tables');
        }

        console.log('Table fetched successfully', resData)
    }catch(error){
        console.error('Error fetching tables:', error);
    }

}