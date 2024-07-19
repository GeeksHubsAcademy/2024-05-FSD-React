import React, { useState } from "react";
import { useNavigate } from "react-router";
import { CSurfer } from "../CSurfer/CSurfer";

export const Header = () => {
	const navigate = useNavigate();

	return (
		<>
			<CSurfer path="/" content="Home" />
			<CSurfer path="/services" content="Services" />
			<div onClick={() => navigate("/login")}> Login </div>
			<CSurfer path="/register" content="Register" />
		</>
	);
};
