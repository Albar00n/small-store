import React, { useState } from "react";
import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	sginInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input";
import Button from "../button/ButtonStyle";
import { UserContext } from '../../context/user.context';
import "./signIn.scss";
const defaultFormFields = {
	email: "",
	password: "",
};
const SignIn = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;


	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const sginInWithGoogle = async () => {
		 await signInWithGooglePopup();

	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		// const {} = await createAuthUserWithEmailAndPassword();
		try {
			const {user}= await sginInAuthUserWithEmailAndPassword(
				email,
				password,
			);
				// setCurrentUser(user);
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("incorrect password for email");
					break;
				case "auth/user-not-found":
					alert("no user associated with this email");
					break;
				default:
					console.log(error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value });
	};
	return (
		<div className="sign-up-container">
			<h2>Already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit} className="group">
				<FormInput
					label="Email"
					type="email"
					required
					onChange={handleChange}
					name="email"
					value={email}
				/>
				{/* <label>Password</label> */}
				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>

				<div className="buttons-container">
					<Button type="submit">Sign In</Button>
					<br />
					<Button type='button' buttonType="google" onClick={sginInWithGoogle}>
					With Google
					</Button>
				</div>
			</form>
		</div>
	);
};

export default SignIn;
