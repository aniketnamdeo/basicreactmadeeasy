import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Label } from "recharts";

const Rechart = () => {
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
		{ name: "RKP", Challans: 123, pv: 4234, amt: 8767 },
		{ name: "VVC", Challans: 400, pv: 2400, amt: 2400 },
		{ name: "GNC", Challans: 323, pv: 4323, amt: 3232 },
	];
	return (
		<React.Fragment>
			<div className="container">
				<BarChart width={800} height={140} data={datta}>
					<CartesianGrid />
					<XAxis dataKey="name" fontSize="12" fontWeight="700" axisLine={false} tickLine={false} />
					<YAxis fontSize="12" fontWeight="700" axisLine={false} tickLine={false} />
					<Bar
						dataKey="pv"
						fill="rgba(0, 167, 255, 0.9)" /*label={{fontSize:"8px"}}*/
					/>
				</BarChart>
			</div>
		</React.Fragment>
	);
};
export default Rechart;
