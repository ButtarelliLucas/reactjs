import { Fragment } from 'react'
import { Disclosure, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import CartWidget from '../CartWidget'
import Counter from '../Counter'
// import Button from '../Button'
import { NavLink } from 'react-router-dom'
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
} from "@material-tailwind/react";
import logo from '../Navbar/cobla.png';




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}



export default function Example() {
  
  const activeStyle = {
    backgroundColor: ' #EF6C00',
    color: 'white',
  };
  return (
    <Disclosure as="nav" className="bg-gradient-to-r from-orange-600 to-orange-900">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-20">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-10 w-auto lg:hidden"
                    src={logo}
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <NavLink to="/home" className="transition text-gray-900 hover:bg-orange-800 hover:  rounded-full hover:text-white px-3 py-2 text-sm font-medium" style={({ isActive }) => (isActive ? activeStyle : undefined)} >
                      <div>Home</div>

                    </NavLink>
                    <NavLink to="/products" className="transition text-gray-900 hover:bg-orange-800 hover:  rounded-full hover:text-white px-3 py-2 text-sm font-medium" style={({ isActive }) => (isActive ? activeStyle : undefined)} >
                      <div>Productos</div>
                    </NavLink>
                    <Menu className="transition text-gray-900 hover:bg-orange-800 hover:  rounded-full hover:text-white px-3 py-2 text-sm font-medium" style={({ isActive }) => (isActive ? activeStyle : undefined)} >
                      <MenuHandler>
                        <div className="transition text-gray-900 hover:bg-orange-800 hover:  rounded-full hover:text-white px-3 py-2 text-sm font-medium" >Categorias</div>
                      </MenuHandler>
                      <MenuList >
                      <NavLink to="/products/category/jewelery">
                        <MenuItem>Jewelery</MenuItem>
                      </NavLink>
                      <NavLink to="/products/category/electronics">
                        <MenuItem>Electronics</MenuItem>
                        </NavLink>
                        <NavLink to="/products/category/men's clothing">

                        <MenuItem>Men's clothing</MenuItem>
                        </NavLink>
                        <NavLink to="/products/category/women's clothing">
                        <MenuItem>Women's clothing</MenuItem>
                        </NavLink>
                      </MenuList>
                    </Menu>
                    <NavLink to="/Contacto" className="transition text-gray-900 hover:bg-orange-800 hover:  rounded-full hover:text-white px-3 py-2 text-sm font-medium" style={({ isActive }) => (isActive ? activeStyle : undefined)} >
                      <div>Contacto</div>
                    </NavLink>








                    {/* NAVIGATION MAP */}
                    {/* {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'rounded-md px-3 py-2 text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))} */}










                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button> */}
                {/* <button
                  type="button"
                  className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                    </svg>
                </button> */}
                <NavLink to="/cart">
                  <CartWidget />
                </NavLink>
                <Counter />

                {/* Profile dropdown */}
                {/* <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu> */}
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">


              <NavLink to="/home">
                <div>Home</div>

              </NavLink>
              <NavLink to="/products">
                <div>Productos</div>
              </NavLink>
              {/* {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))} */}




            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
