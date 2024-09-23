import axios from "axios";
import { useEffect, useState } from "react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

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
					className={`w-full mb-2 border ${
						!props.selectedDistrict && !props.selectedDivision
							? "bg-black dark:bg-white text-white dark:text-black hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black"
							: "bg-white dark:bg-black text-black dark:text-white hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black"
					}`}
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
										? "bg-black text-white dark:bg-white dark:text-black"
										: ""
								} px-4 rounded`}
							>
								{district}
							</AccordionTrigger>
							<AccordionContent>
								<ul>
									{divisions.map((division, i) => (
										<li key={i}>
											<p
												onClick={() => {
													props.setSelectedDistrict(district);
													props.setSelectedDivision(division.name);
												}}
												className={`flex align-middle items-center rounded px-5 p-2 text-sm font-medium cursor-pointer ${
													props.selectedDivision === division.name &&
													props.selectedDistrict === district
														? "bg-black text-white dark:bg-white dark:text-black hover:bg-black hover:text-white hover:dark:bg-white hover:dark:text-black"
														: "text-black dark:text-white hover:dark:text-black hover:bg-white"
												}`}
											>
												<span className="">{division.name}</span>{" "}
												{division.name === "Postal Votes" && (
													<span className="ms-2 flex">
														<Mail size={16} className="inline" />
													</span>
												)}
											</p>
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
