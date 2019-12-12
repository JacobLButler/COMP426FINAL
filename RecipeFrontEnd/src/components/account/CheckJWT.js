import React, {useState} from 'react';
import {getToken} from "../../config/Token";

function CheckJwt() {
  const [jwt] = useState(getToken);
  return (
    <>
      <h2 className="has-text-primary"
      >
        Current JWT
      </h2>
      <div className="jwt-display">
        {jwt ? jwt.split('.').map((text, index) => {
            return <div key={index}>{text}</div>
          }) :
          'No JWT stored'
        }
      </div>
    </>
  );
}

export default CheckJwt;
