import React from "react";
import { AreaChart, XAxis, YAxis, CartesianGrid, Area } from "recharts";

const AreaChartt = () => {
	const datta = [
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
		{ name: "SBC", Challans: 400, pv: 2400, amt: 2400 },
		{ name: "SMC", Challans: 323, pv: 4323, amt: 3232 },
		{ name: "DGC", Challans: 423, pv: 3232, amt: 6454 },
		{ name: "KBC", Challans: 754, pv: 4234, amt: 8767 },
		{ name: "KMC", Challans: 123, pv: 4234, amt: 8767 },
		{ name: "PGC", Challans: 400, pv: 2400, amt: 2400 },
		{ name: "CHP", Challans: 323, pv: 4323, amt: 3232 },
		{ name: "TRC", Challans: 423, pv: 3232, amt: 6454 },
		{ name: "BKR", Challans: 123, pv: 4234, amt: 8767 },
		{ name: "TMC", Challans: 123, pv: 4234, amt: 8767 },
		{ name: "DCC", Challans: 400, pv: 2400, amt: 2400 },
		{ name: "DFC", Challans: 323, pv: 4323, amt: 3232 },
		{ name: "IGI", Challans: 234, pv: 3232, amt: 6454 },
		{ name: "PAP", Challans: 345, pv: 4234, amt: 8767 },
	];
	const head = {
		fontSize: "15px",
		padding: "7px 0px 7px 5px",
		borderBottom: "inset 1.5px lightgrey",
		marginBottom: "0px",
	};
	const bg = {
		backgroundColor: "white",
		height: "370px",
		width: "820px",
		padding: "5px 0px 5px 0px",
		margin: "0px 0px 0px 0px",
		border: "15px solid whitesmoke",
	};
	return (
		<React.Fragment>
			<div style={bg}>
				<div style={head}>
					Challans issued against with no entry restriction
				</div>
				<div>
					<AreaChart
						height={290}
						width={745}
						data={datta}
						margin={{ top: 50, right: 0, left: 20, bottom: 40 }}
					>
						<XAxis dataKey="name" tickLine={false} axisLine={false} />
						<YAxis tickLine={false} axisLine={false} />
						<CartesianGrid vertical={false} />
						<Area
							type="Basis"
							dataKey="pv"
							fill="rgba(26, 230, 255,0.7)"
							stroke="rgba(26, 230, 255,0.7)"
							
						/>
						<Area
							type="Basis"
							dataKey="amt"
							fill="rgba(207, 207, 201,0.35)"
							stroke="rgba(207, 207, 201,0.35)"
							
						/>
					</AreaChart>
				</div>
			</div>
		</React.Fragment>
	);
};

export default AreaChartt;
