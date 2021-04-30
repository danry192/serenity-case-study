import React from "react";

const Careers = ({handleLogout}) => {
    return(
    
    <section className='careers'>
        <nav>
            <h2>Welcome</h2>
            <button onClick={handleLogout}>Logout</button>
        </nav>

        </section>
    
    );

    
};

export default Careers;