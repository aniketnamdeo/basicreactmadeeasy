import React from "react";
import {
	AreaChart,
	XAxis,
	YAxis,
	CartesianGrid,
	Area,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

const AreaChartTwo = () => {
	const head = {
		fontSize: "15px",
		padding: "7px 0px 7px 5px",
		borderBottom: "inset 1.5px lightgrey",
		marginBottom: "0px",
	};
	const bg = {
		backgroundColor: "white",
		height: "370px",
		width: "420px",
		margin: "0px 0px 0px 0px",
		border: "5px solid whitesmoke",
	};
	const attire = {
		height: "123px",
	};
	const data = [
		{ name: "AVC", Challans: 100, pv: 2400, amt: 2400 },
		{ name: "MTC", Challans: 200, pv: 4323, amt: 3232 },
		{ name: "PTC", Challans: 300, pv: 3232, amt: 6454 },
		{ name: "NRL", Challans: 234, pv: 4234, amt: 8767 },
		{ name: "BRD", Challans: 534, pv: 4234, amt: 8767 },
		{ name: "RHN", Challans: 400, pv: 2400, amt: 2400 },
		{ name: "BNA", Challans: 323, pv: 4323, amt: 3232 },
		{ name: "MGP", Challans: 423, pv: 3232, amt: 6454 },
		{ name: "CLC", Challans: 244, pv: 4234, amt: 8767 },
		{ name: "KOT", Challans: 323, pv: 4234, amt: 8767 },
	];
	return (
		<React.Fragment>
			<div style={bg}>
				<div style={head}>Active User Statistics</div>
				<div style={attire}></div>
				<AreaChart
					height={230}
					width={409}
					data={data}
					margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
				>
					<XAxis tickLine={false} axisLine={false} fontSize={0} />
					<CartesianGrid vertical={false} horizontal={false} />
					<Area
						type="monotoneX"
						dataKey="pv"
						fill="rgba(26, 190, 255,0.7)"
						stroke="rgba(26, 230, 255,0.9)"
						strokeWidth={3}
					/>
					<Area
						type="monotoneX"
						dataKey="amt"
						fill="rgba(207, 207, 201,0.6)"
						stroke="rgba(207, 207, 201,0.9)"
						strokeWidth={3}
						Tooltip={true}
					/>
					<Tooltip active={true} />
				</AreaChart>
			</div>
		</React.Fragment>
	);
};
export default AreaChartTwo;
