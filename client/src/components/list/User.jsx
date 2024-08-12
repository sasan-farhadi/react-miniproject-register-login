import { useEffect, useState } from "react"
import AdminLayout from "../layouts/admin-layout/AdminLayout"
const User = () => {

    let [userData, setUserData] = useState([])
    useEffect(() => {
        fetch('/userData').then(x => x.json()).then(x => {
            setUserData(x.userData)
        })
    }, [])

    return (
        <AdminLayout>
            <div>
                <div className="container mt-3">
                    <h3>لیست کاربران </h3>
                    <hr />
                    <table className="table table-bordered text-center table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>نام</th>
                                <th>نام خانوادگی</th>
                                <th>نام کاربری</th>
                                <th>ایمیل</th>
                                <th>استان</th>
                                <th>شهر</th>
                                <th>علاقه مندی</th>
                                <th>ویرایش</th>
                                <th>حذف</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                userData.map(x => {
                                    return (
                                        <tr>
                                            <td>{x.fname}</td>
                                            <td>{x.lname}</td>
                                            <td>{x.username}</td>
                                            <td>{x.email}</td>
                                            <td>{x.provincename}</td>
                                            <td>{x.cityname}</td>
                                            <td>{x.favourite}</td>
                                            <td><button className="btn btn-warning">ویرایش</button></td>
                                            <td><button className="btn btn-danger">حذف</button></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </AdminLayout>
    )
}

export default User
