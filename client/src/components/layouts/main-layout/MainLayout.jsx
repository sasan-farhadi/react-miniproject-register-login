import MainHeader from './MainHeader'
import MainFooter from './MainFooter'

const MainLayout = ({ children }) => {
    return (
        <>
            <MainHeader />
            <main>{children}</main>
            <MainFooter />
        </>
    )
}
export default MainLayout