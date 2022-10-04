import Home from "../components/home"
import Source from "../components/source"
import About from "../components/about"
import Contact from "../components/contact"
import Login from "../components/login"

export const navbar = [
  {id: 1,isPrivate: false, title: 'Home', path: '/home', element: <Home />},
  {id: 2,isPrivate: true, title: 'Source', path: '/source', element: <Source />},
  {id: 3,isPrivate: false, title: 'About', path: '/about', element: <About />},
  {id: 4,isPrivate: false, title: 'Contact', path: '/contact', element: <Contact />},
  {id: 5,isPrivate: false, title: 'Login', path: '/login', element: <Login />},
]