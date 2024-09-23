import axios from "axios";
import { useEffect, useState } from "react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";

type DivisionResult = {
	name: string;
	url: string | null;
	status: "RELEASED" | "PENDING";
};

type DistrictResults = {
	[district: string]: DivisionResult[];
};

const DistrictSidebar = (props: {
	selectedDistrict: string | null;
	selectedDivision: string | null;
	setSelectedDistrict: (arg0: string | null) => void;
	setSelectedDivision: (arg0: string | null) => void;
}) => {
	const [districts, setDistricts] = useState<DistrictResults>({});

	useEffect(() => {
		axios
			.get(
				"https://raw.githubusercontent.com/dan-niles/sl-election-scraper/refs/heads/main/data/districts.json"
			)
			.then((res) => {
				const sortedDistricts: DistrictResults = {};
				Object.keys(res.data)
					.sort()
					.forEach((district) => {
						sortedDistricts[district] = res.data[district].sort(
							(a: DivisionResult, b: DivisionResult) =>
								a.name.localeCompare(b.name)
						);
					});
				setDistricts(sortedDistricts);
			});
	}, []);

	return (
		<aside className="w-64 overflow-auto">
			<Accordion type="single" className="w-full" collapsible>
				<Button
					className="w-full mb-2 hover:bg-slate-200 hover:dark:text-black bg-white text-black border"
					variant="outline"
					onClick={() => {
						props.setSelectedDistrict(null);
						props.setSelectedDivision(null);
					}}
				>
					<span className="text-sm font-medium">All Island Results</span>
				</Button>
				<div className="border rounded">
					{Object.entries(districts).map(([district, divisions]) => (
						<AccordionItem value={district} key={district}>
							<AccordionTrigger
								className={`${
									props.selectedDistrict === district
										? "bg-slate-100 dark:text-black"
										: ""
								} px-4 rounded`}
							>
								{district}
							</AccordionTrigger>
							<AccordionContent>
								<ul>
									{divisions.map((division, i) => (
										<li key={i}>
											<span
												onClick={() => {
													props.setSelectedDistrict(district);
													props.setSelectedDivision(division.name);
												}}
												className={`block rounded px-5 p-2 text-sm font-medium text-black dark:text-white hover:dark:text-black hover:bg-slate-50 cursor-pointer ${
													props.selectedDivision === division.name
														? "bg-slate-100 text-black dark:text-black"
														: ""
												}`}
											>
												{division.name}{" "}
												{division.status === "PENDING" && (
													<span className="text-xs text-yellow-500">
														(Pending)
													</span>
												)}
											</span>
										</li>
									))}
								</ul>
							</AccordionContent>
						</AccordionItem>
					))}
				</div>
			</Accordion>
		</aside>
	);
};

export default DistrictSidebar;
