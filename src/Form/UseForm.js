import React from "react";

//mock use form reducer / store for client side validation
function UseForm(props) {
  return <form>{props.children}</form>;
}

export default UseForm;
