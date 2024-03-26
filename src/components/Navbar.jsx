const Navbar = () => {
  return (
    <nav className="flex w-full bg-transparent fixed z-50 p-4 justify-between bg-richBlack">
      <a href="home"><img className="mt-auto w-6" src="favicon32.png" alt="my logo" /></a>
      <div>
        <ul className="flex gap-4 font-chivo">
          <li><a href="#projects">Projects</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#recommendations">Recommendations</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar