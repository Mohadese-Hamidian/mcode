import React  from "react";
const Form1=props => (
<form onSubmit={props.getname}>
    <input type="text" name="id" placeholder="id"  />
    <input type="text" name="name" placeholder="name"/>
    <button >search</button>
</form>
);
export default Form1;