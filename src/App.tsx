import DistrictSidebar from "./components/DistrictSidebar";
import Header from "./components/Header";

import { useEffect, useState } from "react";
import axios from "axios";

import { Result, columns } from "./components/results-table/Columns";
import { DataTable } from "./components/results-table/DataTable";

export function App() {
	const [results, setResults] = useState<Result[]>([]);
	const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
	const [selectedDivision, setSelectedDivision] = useState<string | null>(null);

	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		setIsLoading(true);
		const url =
			selectedDistrict && selectedDivision
				? `https://raw.githubusercontent.com/dan-niles/sl-election-scraper/refs/heads/main/data/districts/${selectedDistrict}/${selectedDivision}.json`
				: "https://raw.githubusercontent.com/dan-niles/sl-election-scraper/refs/heads/main/data/all-island-results.json";
		axios.get(url).then((res) => {
			res.data.forEach((result: Result, index: number) => {
				result.rank = index + 1;
				result.votes = result.votes.split(",").join("");
				result.candidate = result.candidate
					.toLowerCase()
					.replace(/\b\w/g, (l) => l.toUpperCase());
			});
			setResults(res.data);
			setIsLoading(false);
		});
	}, [selectedDistrict, selectedDivision]);

	return (
		<div className="dark:bg-black dark:text-white">
			<Header />
			<main className="min-h-[calc(100vh_-_theme(spacing.16))] flex flex-row align-top gap-4 bg-muted/40 p-4 md:gap-8 md:p-5">
				<DistrictSidebar
					selectedDistrict={selectedDistrict}
					selectedDivision={selectedDivision}
					setSelectedDistrict={setSelectedDistrict}
					setSelectedDivision={setSelectedDivision}
				/>
				<div className="flex-1">
					<h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
						{selectedDistrict && selectedDivision
							? `${selectedDistrict} - ${selectedDivision} Results`
							: "All Island Results"}
					</h1>
					{isLoading && <p>Loading...</p>}
					{!isLoading && <DataTable columns={columns} data={results} />}
				</div>
			</main>
		</div>
	);
}

export default App;
