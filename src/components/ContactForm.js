import React, { useState } from "react";


function ContactForm() {
    return (
    <form >
   
     <div>
      <label>
        Nom:
        <input
          type="text"
          
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
         
        />
      </label>
      <br />
      <button type="submit">Envoyer</button>
      </div>
    </form>
  );
}

export default ContactForm;
