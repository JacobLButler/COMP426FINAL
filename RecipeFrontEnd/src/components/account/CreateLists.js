import React from 'react';
import {setToken} from "../../config/Token";
import { rootCertificates } from 'tls';
import {useState, useEffect} from 'react';

function CreateLists() {
  const [Newclicked, setnewClicked] = useState('unclicked');
    return (
      <button className="button is-success"
              onClick={() => {
                setnewClicked('clicked');
                console.log("loggiewoggie");
                console.log(Newclicked);
                // window.location.reload();
              }}>Create a New Recipe</button>
    );
  }

  export default CreateLists;