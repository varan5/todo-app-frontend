import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './Navbar.css'

const MyNavbar = () => {
  return (
    <div>
      <>
        <Navbar bg="light" variant="light">
          <Container>
            <Link className="navbar-link" to="/"><Navbar.Brand  href="/">Todify</Navbar.Brand></Link>
            <Nav className="me-auto">
              <Link  className="navbar-link" to="/todos"><Nav.Link href="/">View Todos</Nav.Link></Link>
              <Link  className="navbar-link" to="/todo-details"><Nav.Link href="/todo-details">Create Todo</Nav.Link></Link>
              <Link  className="navbar-link" to="/game"><Nav.Link href="#pricing">Play Game ?</Nav.Link></Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  )
}

export default MyNavbar

// const MyNavbar = () => {
//   return (
//     <div>
//       <nav>
//         <div class="nav-wrapper">
//           <Link to="/"><a href="/" class="brand-logo">Todify</a></Link>
//           <ul id="nav-mobile" class="right hide-on-med-and-down">
//             <li><Link to="/todos"><a href="">View All Todos</a></Link></li>
//             <li><Link to="/todo"><a href="">Create New Todo</a></Link></li>
//             <li><Link to="/game"><a href="">Play Game ?</a></Link></li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   )
// }

// export default MyNavbar