import * as React from "react"
import './css/index.css';
import { useState, useEffect } from "react";
import 'intersection-observer';
//import { Timeline, TimelineConnector, TimelineSeparator, TimelineDot, TimelineContent, TimelineItem } from '@material-ui/lab';
import Timeline from './components/Timeline';
import { Dropdown } from 'react-bootstrap';

// markup
function IndexPage() {
	/*const [aShow, setAShow] = useState('');
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
	const [uShow, setUShow] = useState('');*/
	const [visible, setVisible] = useState(true);
	/*useEffect (() => {
		const name = [setAShow, setLShow, setEShow, setXShow, setA2Show, setNShow, setDShow, setE2Show, setRShow, setL2Show, setIShow, setUShow];
		let time = 200;
		for (let i = 0; i < name.length; ++i) {
			setTimeout(() => {
				name[i]('show');
			}, 0);
		}
	}, []);*/
	const domRef = React.useRef();
	useEffect (() => {
		let observer = new IntersectionObserver(e => {
			e.forEach(element => setVisible(element.isIntersecting));
		});
		observer.observe(domRef.current);
		return () => observer.unobserve(domRef.current);
	}, []);
  	return (
		<div className="outer-container">
			<div className="name-animation-container">
				<p className={`letter ${visible ? 'show' : ''}`} ref={domRef}>Alexander Liu</p>
			</div>
			<div className="timeline-container">
				<Timeline alternate="false"/>
			</div>
		</div>
		
	);
}

export default IndexPage
