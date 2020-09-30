import React from "react";
import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Line,
	ResponsiveContainer,
} from "recharts";
const Recharts = () => {
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
		{ name: "RKP", Challans: 123, pv: 4234, amt: 8767 },
		{ name: "VVC", Challans: 400, pv: 2400, amt: 2400 },
		{ name: "GNC", Challans: 323, pv: 4323, amt: 3232 },
		{ name: "KPC", Challans: 423, pv: 3232, amt: 6454 },
		{ name: "VKC", Challans: 533, pv: 4234, amt: 8767 },
		{ name: "MWC", Challans: 232, pv: 4234, amt: 8767 },
		{ name: "SHD", Challans: 234, pv: 4234, amt: 8767 },
		{ name: "KJC", Challans: 123, pv: 4234, amt: 8767 },
		{ name: "SPC", Challans: 400, pv: 2400, amt: 2400 },
		{ name: "DWC", Challans: 323, pv: 4323, amt: 3232 },
		{ name: "KHC", Challans: 543, pv: 3232, amt: 6454 },
		{ name: "NJC", Challans: 123, pv: 4234, amt: 8767 },
		{ name: "TNC", Challans: 123, pv: 4234, amt: 8767 },
		{ name: "MPC", Challans: 400, pv: 2400, amt: 2400 },
		{ name: "PBC", Challans: 323, pv: 4323, amt: 3232 },
		{ name: "PNC", Challans: 423, pv: 3232, amt: 6454 },
		{ name: "RGC", Challans: 123, pv: 4234, amt: 8767 },
		{ name: "NLC", Challans: 123, pv: 4234, amt: 8767 },
		{ name: "JPC", Challans: 754, pv: 4234, amt: 8767 },
		{ name: "GKC", Challans: 234, pv: 4234, amt: 8767 },
		{ name: "HKC", Challans: 400, pv: 2400, amt: 2400 },
		{ name: "KKC", Challans: 345, pv: 4323, amt: 3232 },
		{ name: "LNC", Challans: 123, pv: 3232, amt: 6454 },
		{ name: "MRC", Challans: 234, pv: 4234, amt: 8767 },
		{ name: "SGV", Challans: 123, pv: 4234, amt: 8767 },
		{ name: "SDV", Challans: 400, pv: 2400, amt: 2400 },
		{ name: "SVC", Challans: 323, pv: 4323, amt: 3232 },
		{ name: "SKT", Challans: 423, pv: 3232, amt: 6454 },
		{ name: "PTH", Challans: 234, pv: 4234, amt: 8767 },
	];
	const body = {
		backgroundColor: "white",
		borderBottom: "12px inset rgba(230,230,230,0.8)",
		borderTop: "12px outset rgba(230,230,230,0.8)",
		borderLeft: "20px outset rgba(230,230,230,0.8)",
		borderRight: "20px inset rgba(230,230,230,0.8)",
		width: "1000px",
		height: "470px",
	};
	const head = {
		fontSize: "14px",
		borderBottom: "solid 0.2px lightgrey",
		position: "relative",
		padding: "9px 0px 9px 9px",
		fontFamily: "times",
		fontWeight: "100",
		letterSpacing: "1.6px",
		color: "rgb(51, 51, 51)",
	};
	const lowergraph = {
		paddingTop: "100px",
	};
	return (
		<React.Fragment>
			<div className="container">
				<div style={body} className="">
					<div style={head}>
						Number of challans issued in a single day on circle basis
						distributed for every head of violation.
					</div>
					<div style={lowergraph}>
						<AreaChart type="monotone" width={900} height={300} data={data}>
							<CartesianGrid />
							<XAxis
								dataKey="name"
								fontSize="14"
								tickLine={false}
								axisLine={false}
								fontWeight={600}
							/>
							<YAxis
								tickLine={false}
								fontSize="14"
								fontWeight={600}
								axisLine={false}
							/>
							<Area
								type="monotoneX"
								dataKey="Challans"
								fill="rgba(0,200,255,0.4)"
								dot={true}
							/>
						</AreaChart>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};
export default Recharts;
