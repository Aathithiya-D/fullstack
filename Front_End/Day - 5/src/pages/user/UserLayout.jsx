  import PropTypes from 'prop-types'
  import UserNavbar from '../../components/UserNavbar'
  import UserFooter from '../../components/UserFooter'

  const UserLayout = ({children}) => {
    return (
      <div>
          <header >
            <UserNavbar />
          </header>
          <main>
            {children}
          </main>
          <footer>
            <UserFooter />
          </footer>
      </div>
    )
  }

  UserLayout.propTypes = {
    children : PropTypes.node.isRequired
  }
  export default UserLayout