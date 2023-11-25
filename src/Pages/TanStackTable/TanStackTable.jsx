import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../components/SectionTitle";
import { useReactTable, flexRender, getCoreRowModel, createColumnHelper } from '@tanstack/react-table';

const columnHelper = createColumnHelper();
const columns = [
    columnHelper.accessor("name", {
        header: "Name",
    }),
    columnHelper.accessor("price", {
        header: "Price",
    }),
    columnHelper.accessor("category", {
        header: "Category",
    })
]

const TanStackTable = () => {
    const data = useLoaderData()
    console.log(data)

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    })

    return (
        <div className="py-36">
            <SectionTitle
                heading="TANSTACK TABLE"
                subHeadng="Testing"
            ></SectionTitle>

            <div className="overflow-x-auto mt-8 mb-20 mx-20">
                <table className="mx-auto">
                    <thead className="bg-cyan-200 text-center">
                        {table.getHeaderGroups()?.map(headerGroup => (
                            <tr key={headerGroup.id}  className="text-xl">
                                {headerGroup.headers.map(header => (
                                    <th key={header.id} className="px-24 border-4 border-cyan-600 py-2">
                                        {flexRender(
                                            header.column.columnDef.header,
                                            header.getContext()
                                        )}
                                    </th>
                                ))}
                            </tr>
                        ))
                        }
                    </thead>

                    <tbody>
                        {table.getRowModel().rows.map(row => (
                            <tr key={row.id}>
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className="overflow-x-auto px-5 py-2 border-4 border-cyan-600 text-gray-500">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default TanStackTable;