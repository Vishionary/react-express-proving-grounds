import { useState, useEffect } from 'react';

const App = () => {
    const [username, setUserName] = useState(null);

    useEffect(() => {
        let isCancelled = false;

        const loadData = async ()=>{
            try{
                const API_URL = 'http://localhost:3121/userdata';
                const resp = await fetch(API_URL);                
                const jsonResponse = await resp.json();
                if(!isCancelled){
                    setUserName(jsonResponse?.username);
                } 
            }
            catch(err){
                console.error(err);
            }
        }
     

        loadData();
        return () => isCancelled = true;
    }, []);

    return (
        <div>
            <header>
                Proving Grounds
      </header>
            <p>
                Username response from API: {username}
      </p>
        </div>
    );
}

export default App;
