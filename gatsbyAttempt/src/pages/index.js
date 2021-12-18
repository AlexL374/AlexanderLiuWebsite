import * as React from "react"
import './css/index.css';
import { useState, useEffect } from "react";

// markup
function IndexPage() {
	const [aShow, setAShow] = useState('');
	const [lShow, setLShow] = useState('');
	const [eShow, setEShow] = useState('');
	const [xShow, setXShow] = useState('');
	const [a2Show, setA2Show] = useState('');
	const [nShow, setNShow] = useState('');
	const [dShow, setDShow] = useState('');
	const [e2Show, setE2Show] = useState('');
	const [rShow, setRShow] = useState('');
	const [l2Show, setL2Show] = useState('');
	const [iShow, setIShow] = useState('');
	const [uShow, setUShow] = useState('');
	useEffect (() => {
		const name = [setAShow, setLShow, setEShow, setXShow, setA2Show, setNShow, setDShow, setE2Show, setRShow, setL2Show, setIShow, setUShow];
		let time = 200;
		for (let i = 0; i < name.length; ++i) {
			setTimeout(() => {
				name[i]('show');
			}, time + i * 200);
		}
	});
  	return (
		<div className="name-animation">
			<p className={`letter ${aShow}`}>A</p>
			<p className={`letter ${lShow}`}>l</p>
			<p className={`letter ${eShow}`}>e</p>
			<p className={`letter ${xShow}`}>x</p>
			<p className={`letter ${a2Show}`}>a</p>
			<p className={`letter ${nShow}`}>n</p>
			<p className={`letter ${dShow}`}>d</p>
			<p className={`letter ${e2Show}`}>e</p>
			<p className={`letter indent-first-last ${rShow}`}>r</p>
			<p className={`letter ${l2Show}`}>L</p>
			<p className={`letter ${iShow}`}>i</p>
			<p className={`letter ${uShow}`}>u</p>
		</div>
	);
}

export default IndexPage
