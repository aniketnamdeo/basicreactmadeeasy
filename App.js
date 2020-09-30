import React from "react";
import logo from "./logo.svg";
import "./App.css"; //no need to write ./About.js
import Icmtdcmt from "./Icmtdcmt";
import About from "./About";
import Storenos from "./Storenos";
import School from "./School";
import ToggleButton from "./ToggleButton";
import ToggleButtonZ from "./ToggleButtonZ";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";
import Chart from "./Chart";
import Project from "./Project";
import Project2 from "./Project2";
import Rechart from "./Rechart";
import Recharts from "./Recharts";
import Doughnut from "./Doughnut";
import Piee from "./Piee";
import AreaChartt from "./AreaChartt";
import AreaChartTwo from "./AreaChartTwo";
import Liness from "./Liness";
import Lines from "./Lines";
import Speedo from "./Speedo"
import ConditionalCss from './ConditionalCss'
const inpbut = {
	display: "flex",
	marginTop: "10px",
};
function App() {
	return (
		//use an array to return more than 1 value
		<React.Fragment>
			
			{/* <Speedo /> */}
			{/* <Lines />
			<div style={inpbut}>
				<Liness />
				<AreaChartTwo />
			</div>
			<Piee />
			<AreaChartt />
			<Doughnut />
			<Recharts />
			<Rechart /> */}
			{/* <NavBar /> */}
			<ConditionalCss />
			{/* <div style={{ display: "flex" }} className="container">
				<Project />
				<Project2 />
			</div> */}
			{/* <Chart /> */}
			<div style={inpbut}>
      <About />
      <Storenos />
      <Icmtdcmt />
      </div>
      <div style={inpbut}>
        <School />
        <ToggleButton />
        <ToggleButtonZ />
      </div>
		</React.Fragment>
	);
}

export default App;
