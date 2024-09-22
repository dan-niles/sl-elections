import axios from "axios";
import { useEffect, useState } from "react";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
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
			.then((res) => setDistricts(res.data));
	}, []);
	return (
		<aside className={"w-64 overflow-auto"}>
			<ScrollArea className="h-[calc(100vh-8rem)] border p-4 relative">
				<Accordion type="single" className="w-full" collapsible>
					<Button
						className="w-full py-2 mb-2"
						onClick={() => {
							props.setSelectedDistrict(null);
							props.setSelectedDivision(null);
						}}
					>
						<span className="text-sm font-medium">All Island Results</span>
					</Button>
					{Object.entries(districts).map(([district, divisions]) => (
						<AccordionItem value={district} key={district}>
							<AccordionTrigger
								className={`${
									props.selectedDistrict === district ? "bg-slate-100" : ""
								} px-2 rounded`}
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
												className={`block rounded p-2 text-sm font-medium text-slate-900 hover:bg-slate-50 cursor-pointer ${
													props.selectedDivision === division.name
														? "bg-slate-100"
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
				</Accordion>
			</ScrollArea>
		</aside>
	);
};

export default DistrictSidebar;
