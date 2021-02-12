import React, { useState } from 'react';
// import firebase from "./firebase"


function Testt() {
const [count, setCount] = useState(0);

return (
    <div>
        <p>Ви натиснули {count} разів</p>
        <button onClick={() => setCount(count + 1)}>Натисни мене
        </button>
    </div>
    );
}

export default Testt