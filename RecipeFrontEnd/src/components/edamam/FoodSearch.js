import React from 'react';
import {init} from "../../api/edamam/Edamam";

function foodSearch() {
  return (
<div>
<header>
    <form id="search" name="search" onSubmit={async (e) => {
      e.preventDefault();
    }}>
      <input name="name" placeholder="Type a food or a meal..."></input>
      <button type="submit">SEARCH</button>
    </form>
  </header>
  <section>
    <div id="result"></div>
  </section>
</div>
  );
}

export default foodSearch;