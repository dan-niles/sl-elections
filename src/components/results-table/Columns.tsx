import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../ui/button";

export type Result = {
	rank: number;
	party: string;
	candidate: string;
	votes: string;
	percentage: number;
};

export const AVAILABLE_PARTIES = ["IND16", "NPP", "SLPP", "SJB"];

export const columns: ColumnDef<Result>[] = [
	{
		accessorKey: "rank",
		header: "#",
	},
	{
		accessorKey: "party",
		header: "Party",
	},
	{
		accessorKey: "candidate",
		header: "Candidate",
		cell: ({ cell, row }) => {
			const party = AVAILABLE_PARTIES.includes(row.getValue("party") as string)
				? row.getValue("party")
				: "UNKNOWN";
			const candidate = cell.getValue();
			return (
				<div className="flex flex-row gap-3 align-middle items-center">
					<img
						src={party ? `/img/${party}.webp` : ""}
						alt={`${candidate} Candidate`}
						width="35"
						height="35"
					/>
					<p>{candidate as string}</p>
				</div>
			);
		},
	},
	{
		accessorKey: "votes",
		header: ({ column }) => {
			return (
				<Button
					variant="ghost"
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
				>
					Votes
					<ArrowUpDown className="ml-2 h-4 w-4" />
				</Button>
			);
		},
	},
	{
		accessorKey: "percentage",
		header: "Percentage",
	},
];
