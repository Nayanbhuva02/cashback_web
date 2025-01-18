import { createRoot } from 'react-dom/client'
import './index.css'
import {
  BrowserRouter,
  Route,
  Routes
} from 'react-router-dom'
import Layout from './Layout.tsx'
import Home from './components/Home/Home.tsx'
import About from './components/About/About.tsx'
import Contact from './components/Contact/Contact.tsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       { path: '', element: <Home /> },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ])

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" element={<Home />} />
//       <Route path="about" element={<About />} />
//       <Route path="contact" element={<Contact />} />
//       <Route path="user/:userId" element={<User />} />
//     </Route>
//   )
// )

createRoot(document.getElementById('root')!).render(
  <>
    {/* <RouterProvider router={router}></RouterProvider> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>
)
