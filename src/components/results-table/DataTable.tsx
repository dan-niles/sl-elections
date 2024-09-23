import React from "react";
import classNames from "classnames";

import {
	ColumnDef,
	flexRender,
	SortingState,
	getCoreRowModel,
	useReactTable,
	getPaginationRowModel,
	getSortedRowModel,
	ColumnFiltersState,
	getFilteredRowModel,
} from "@tanstack/react-table";

import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

import { AVAILABLE_PARTIES } from "./Columns";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface DataTableProps<TData, TValue> {
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	selectedDivision: string | null;
	selectedDistrict: string | null;
}

export function DataTable<TData, TValue>({
	columns,
	data,
	selectedDivision,
	selectedDistrict,
}: DataTableProps<TData, TValue>) {
	const [sorting, setSorting] = React.useState<SortingState>([]);
	const [pagination, setPagination] = React.useState({
		pageIndex: 0, //initial page index
		pageSize: 25, //default page size
	});
	const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
		[]
	);
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		onSortingChange: setSorting,
		getSortedRowModel: getSortedRowModel(),
		onPaginationChange: setPagination,
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		state: {
			sorting,
			pagination,
			columnFilters,
		},
	});

	return (
		<div>
			<div className="flex justify-between align-middle py-2">
				<h1 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-4">
					{selectedDistrict && selectedDivision
						? `${selectedDistrict} - ${selectedDivision} Results`
						: "All Island Results"}
				</h1>
				<Input
					placeholder="Search candidate..."
					value={
						(table.getColumn("candidate")?.getFilterValue() as string) ?? ""
					}
					onChange={(event) =>
						table.getColumn("candidate")?.setFilterValue(event.target.value)
					}
					className="w-64"
				/>
			</div>
			<div className="rounded-md border w-full">
				<Table>
					<TableHeader>
						{table.getHeaderGroups().map((headerGroup) => (
							<TableRow key={headerGroup.id}>
								{headerGroup.headers.map((header) => {
									return (
										<TableHead key={header.id}>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext()
												  )}
										</TableHead>
									);
								})}
							</TableRow>
						))}
					</TableHeader>
					<TableBody>
						{table.getRowModel().rows?.length ? (
							table.getRowModel().rows.map((row) => (
								<TableRow
									key={row.id}
									data-state={row.getIsSelected() && "selected"}
									className={classNames({
										"bg-red-100 dark:bg-red-950":
											row.getValue("party") === "NPP",
										"bg-green-100 dark:bg-green-950":
											row.getValue("party") === "SJB",
										"bg-orange-50 dark:bg-yellow-950":
											row.getValue("party") === "IND16",
										"bg-white dark:bg-black": !AVAILABLE_PARTIES.includes(
											row.getValue("party")
										),
									})}
								>
									{row.getVisibleCells().map((cell) => (
										<TableCell
											key={cell.id}
											className="text-black dark:text-white"
										>
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext()
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={columns.length}
									className="h-24 text-center"
								>
									No results.
								</TableCell>
							</TableRow>
						)}
					</TableBody>
				</Table>
			</div>
			<div className="flex items-center justify-end space-x-2 py-4">
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
				>
					Previous
				</Button>
				<Button
					variant="outline"
					size="sm"
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}
				>
					Next
				</Button>
			</div>
		</div>
	);
}
