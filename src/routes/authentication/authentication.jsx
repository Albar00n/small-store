import React from "react";
import SignUp from "../../components/sign-up/SignUp";
import SignIn from "../../components/sign-in-form/SignIn";
import "./authentication.scss";
const Authentication = () => {


	return (
		<div className="authentication">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default Authentication;
