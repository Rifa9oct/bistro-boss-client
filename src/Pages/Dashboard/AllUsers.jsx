import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";


const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    const handlMakeAdmin = user => {
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${user.name} is an Admin Now`,
                        showCancelButton: false,
                        timer: 1500
                    });
                }
            })
    }


    const handlDelete = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your user has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }

    return (
        <div>
            <div className="flex justify-evenly items-center mt-20 font-bold">
                <h2 className="text-4xl">All Users</h2>
                <h2 className="text-4xl">Total Users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto mt-8 mb-20 mx-20">
                <table className="table">
                    <thead className="bg-gray-200">
                        <tr className="text-xl">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item, index) => <tr key={item._id}>
                                <th>{index + 1}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    {
                                        item.role === "admin" ? "Admin" :
                                            <button onClick={() => handlMakeAdmin(item)} className="btn bg-orange-500 text-xl text-white"><FaUsers /></button>
                                    }
                                </td>
                                <td>
                                    <button onClick={() => handlDelete(item)} className="btn btn-ghost text-xl text-red-500"><FaTrashAlt /></button>
                                </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUsers;