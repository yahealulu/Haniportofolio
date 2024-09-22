import './NavigationBar.css' 
function NavigationBar() {
  return (
    <header className="header">
    <div className="logo">Hani.dev</div>
      <ul className='navigations'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
  </header>  )
}

export default NavigationBar