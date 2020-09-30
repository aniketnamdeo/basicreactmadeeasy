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
			fill="black"
			textAnchor={x > cx ? "start" : "end"}
			dominantBaseline="central"
		>
			{`${percent.toFixed(0)}%`}
		</text>
	);
};
const COLORS = ["#00bfff", "#ffbf00", "#b8b8ad", "#e65c00", "#7575d7"];
const RADIAN = Math.PI / 180;
const Doughnut = () => {
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
		marginBottom: "40px",
	};
	const bg = {
		backgroundColor: "white",
		height: "370px",
		width: "420px",
		padding: "0px 0px 0px 0px",
		margin: "0px 0px 0px 0px",
		border: "15px solid whitesmoke",
	};
	return (
		<React.Fragment>
			<div className="" style={bg}>
				<div style={head}>Challan Generated through channels</div>
				<div>
					<ResponsiveContainer height={230} width={400}>
						<PieChart fontSize={13}>
							<Pie
								data={datta}
								dataKey="percent"
								outerRadius="100%"
								paddingAngle={1}
								minAngle={0}
								innerRadius="72%"
								label={renderCustomizedLabel}
								labelLine={false}
								startAngle={90}
								endAngle={450}
								unit="%"
							>
								{datta.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={COLORS[index % COLORS.length]}
									/>
								))}
							</Pie>
							<Legend iconSize={6} iconType="square" />
						</PieChart>
					</ResponsiveContainer>
				</div>
			</div>
		</React.Fragment>
	);
};
export default Doughnut;
