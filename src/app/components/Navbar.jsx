'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


const blogsData = [
  {
    id: 1,
    title: "How Hospital Management Software Improves Healthcare Services",
    description:
      "Hospital management software helps hospitals manage patients, billing, appointments, beds, doctors, pharmacy, and diagnostic services from one central system.",
    author: "Sohel Rana",
    category: "Hospital Software",
    date: "2026-10-01",
    image: "/images/blog-1.jpg"
  },
  {
    id: 2,
    title: "Why Digital Patient Management Is Important for Hospitals",
    description:
      "A digital patient management system makes it easier to store patient information, track medical records, manage appointments, and provide faster services.",
    author: "Sohel Rana",
    category: "Healthcare Technology",
    date: "2026-10-02",
    image: "/images/blog-2.jpg"
  },
  {
    id: 3,
    title: "How to Manage Hospital Billing Efficiently",
    description:
      "Modern hospital billing software can simplify OPD, IPD, pharmacy, pathology, radiology, bed charges, payments, discounts, and due management.",
    author: "Sohel Rana",
    category: "Hospital Billing",
    date: "2026-10-03",
    image: "/images/blog-3.jpg"
  },
  {
    id: 4,
    title: "Benefits of Hospital Inventory Management Software",
    description:
      "Inventory management helps hospitals track medicines, medical equipment, stock levels, purchases, suppliers, and product usage more efficiently.",
    author: "Sohel Rana",
    category: "Inventory Management",
    date: "2026-10-04",
    image: "/images/blog-4.jpg"
  },
  {
    id: 5,
    title: "How Hospital Software Helps Reduce Administrative Work",
    description:
      "Hospital software automates many daily administrative tasks and helps staff manage patients, doctors, accounts, reports, and hospital operations more effectively.",
    author: "Sohel Rana",
    category: "Hospital Management",
    date: "2026-10-05",
    image: "/images/blog-5.jpg"
  }
];



const Navbar = () => {
    const pathname=usePathname()
    console.log(pathname)
    const links = (
        <>
            <li>
                <Link className={pathname==='/docs'? 'text-green-300':''} href="/docs">Docs</Link>
            </li>
            <li>
                <Link className={pathname==='/showcase'? 'text-green-300':''} href="/showcase">Showcase</Link>
            </li>
                        <li>
                <Link href="/blogs">Blogs</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li><Link href="/about/developers">Developers</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/users">Users</Link></li>
            <li><Link href="/todo">TODO</Link></li>
        </>
    );
    return (
        <div className="max-lg:collapse bg-base-200  shadow-sm w-full rounded-md">
            <input
                id="navbar-1-toggle"
                className="peer hidden"
                type="checkbox"
            />
            <label
                htmlFor="navbar-1-toggle"
                className="fixed inset-0 hidden max-lg:peer-checked:block"
            ></label>
            <div className="collapse-title navbar">
                <div className="navbar-start">
                    <label
                        htmlFor="navbar-1-toggle"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            aria-label="Menu"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <button className="btn btn-ghost text-xl">
                        daisyUI
                    </button>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <input
                        type="text"
                        placeholder="Search"
                        className="input w-64 lg:w-auto"
                    />
                </div>
            </div>

            <div className="collapse-content lg:hidden z-1">
                <ul className="menu">{links}</ul>
            </div>
        </div>
    );
};

export default Navbar;
