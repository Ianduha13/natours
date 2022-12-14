import "./styles/header.css"
import Button from "./Button"
import logowhite from "./styles/img/logo-white.png"
const Header = () => {
  return (
    <header className='header'>
      <div className='logo-box'>
        <img src={`${logowhite}`} alt='logo' className='logo' />
      </div>
      <div className='text-box'>
        <h1 className='heading-primary'>
          <span className='heading-primary-main'>Outdoors</span>
          <span className='heading-primary-sub'>is where life happens</span>
        </h1>
        <Button />
      </div>
    </header>
  )
}
export default Header
