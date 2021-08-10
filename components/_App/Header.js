import { Menu, Container, Image, Icon } from 'semantic-ui-react'
import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import NProgress from 'nprogress'
{/*Next provides a custom react hook that gives us information from our router */}
Router.onRouteChangeStart = () => NProgress.start()
{/*This starts the nprogress bar we imported*/}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()

function Header() {
const user = true;
{/* If we have a user, we will only show certain routes, such as account, or logout, otherwise show login or signup*/}
const router = useRouter();

{/* creating helper function to conditionally apply active style prop*/}
function isActive(route) {
  return route === router.pathname;
}

return (
  <Menu fluid id="menu" inverted>
    {/* fluid is a prop from semantic ui*/}
    <Container text>
      <Link href="/">
        <Menu.Item header active={isActive('/')}>
          {/*Add active style prop, but need it conditionally applied */}
          <Image
            size="mini"
            src="/static/logo.svg"
            style={{ marginRight: '1em' }}
          />
          BuyThisAndThat
        </Menu.Item>

      {/* wrapping every menu item */}
      </Link>

      <Link href="/cart">
        <Menu.Item header active={isActive('/cart')}>
          <Icon
            name="cart"
            size="large"
          />
          Cart
        </Menu.Item>
      {/* wrapping every menu item */}
      </Link>

      {user && <Link href="/create">
        <Menu.Item header active={isActive('/create')}>
          <Icon
            name="add square"
            size="large"
          />
          Create
        </Menu.Item>  
      {/* wrapping every menu item */}
      </Link>}

      {/*creating a conditional with ternary */}
        { user ? (<>
      <Link href="/account">
        <Menu.Item header active={isActive('/account')}>
          <Icon
            name="user"
            size="large"

          />
          Account
        </Menu.Item>
          
      {/* wrapping every menu item */}
      </Link>
        <Menu.Item header>
          <Icon
            name="sign out"
            size="large"
          />
          {/* create button later for sign out */}
          Logout
        </Menu.Item>
          </>)
        :
      (<>
      <Link href="/login">
        <Menu.Item header active={isActive('/login')}>
          <Icon
            name="sign in"
            size="large"
          />
          {/* create button later for Log In */}
          Login
        </Menu.Item>
      </Link>

      <Link href="/signup">
        <Menu.Item header active={isActive('/signup')}>
          <Icon
            name="signup"
            size="large"
          />
          {/* create button later for Log In */}
          SignUp
        </Menu.Item>
      </Link>
      </>)}
      {/* container is being used to set a maximum width*/}
    </Container>
  </Menu>
)

}

export default Header;
