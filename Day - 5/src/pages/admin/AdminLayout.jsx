import PropTypes from 'prop-types'
import AdminNavbar from '../../components/AdminNavbar'
import AdminSidePanel from '../../components/AdminSidebar'



const UserLayout = ({children}) => {
  return (
    <div>
        <header>
          <AdminNavbar />
        </header>
        <div>
          <aside>
            <AdminSidePanel />
          </aside>
          <main>
            {children}
          </main>
        </div>
    </div>
  )
}

UserLayout.propTypes = {
  children : PropTypes.node.isRequired
}
export default UserLayout