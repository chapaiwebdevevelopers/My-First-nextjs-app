
import React from 'react';
import Post from '../components/Post';
// TODO : Fetch Data from an API instead of using static data
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



const BlogsPage = () => {



    return (
        <div>
            <h2>Our Blogs</h2>
            {
                blogsData.map(post=> <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default BlogsPage;