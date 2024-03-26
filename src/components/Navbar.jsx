const Navbar = () => {
  return (
    <nav className="flex w-full bg-argBlue fixed z-50 p-2 justify-between">
      <h1>Navbar</h1>
      <div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar