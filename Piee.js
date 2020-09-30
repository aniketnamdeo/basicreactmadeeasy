import React from "react";
import {
	PieChart,
	Pie,
	Tooltip,
	Cell,
	Label,
	Legend,
	Sector,
	ResponsiveContainer,
} from "recharts";

const renderCustomizedLabel = ({
	cx,
	cy,
	midAngle,
	innerRadius,
	outerRadius,
	percent,
	index,
}) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.25;
	const x = cx + 0.91 * radius * Math.cos(midAngle * RADIAN);
	const y = cy + radius * Math.sin(-midAngle * RADIAN);
	return (
		<text
			x={x}
			y={y}
			textAnchor={x > cx ? "start" : "end"}
			// dominantBaseline="central"
		>
			{` ${percent}%`}
		</text>
	);
};
const COLORS = ["#00bfff", "#ffbf00", "#b8b8ad", "#e65c00", "#7575d7"];
const RADIAN = Math.PI / 180;
const Piee = () => {
	const datta = [
		{ name: "Traffic Sentinals", percent: 1 },
		{ name: "VOC", percent: 8 },
		{ name: "SLVD", percent: 30 },
		{ name: "RLVD", percent: 46 },
		{ name: "EChallan", percent: 15 },
	];
	const head = {
		fontSize: "15px",
		padding: "7px 0px 7px 5px",
		borderBottom: "inset 1.5px lightgrey",
		marginBottom: "0px",
	};
	const bg = {
		backgroundColor: "white",
		height: "470px",
		width: "520px",
		padding: "0px 0px 0px 0px",
		margin: "0px 0px 0px 0px",
		border: "15px solid whitesmoke",
	};
	return (
		<React.Fragment>
			<div className="" style={bg}>
				<div style={head}>Head-wise spacial distribution of challans</div>
				<ResponsiveContainer height={470} width={520}>
					<PieChart fontSize={13}>
						<Pie
							cx="50%"
							cy="40%"
							data={datta}
							dataKey="percent"
							paddingAngle={10}
							outerRadius={100}
							cornerRadius={0}
							minAngle={0}
							minAngle={2}
							label={true}
							labelLine={false}
							startAngle={90}
							endAngle={450}
							unit="%"
						>
							{datta.map((entry, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index]} />
							))}
							<Legend iconSize={6} iconType="square" />
						</Pie>
					</PieChart>
				</ResponsiveContainer>
			</div>
		</React.Fragment>
	);
};
export default Piee;
