import AdminHeader from './AdminHeader'
import AdminFooter from './AdminFooter'

const AdminLayout = ({ children }) => {
    return (
        <div>
            <AdminHeader />
            <main>{children}</main>
            <AdminFooter />
        </div>
    )
}
export default AdminLayout