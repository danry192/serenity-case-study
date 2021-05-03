import React from "react";

const Careers = ({handleLogout}) => {
    return(
    
    <section className='careers'>
        <nav>
            <h2>Careers</h2>

            <p>Serenity Home Care is always looking to expand and grow.</p>

            <button onClick={handleLogout}>Logout</button>
        </nav>

        </section>
    
    );

    
};

export default Careers;