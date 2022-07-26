import React from "react";
import Header from "./Header";
import "../styles/dashboard.css";
  import ProductCard from "../components/ProductCard";

const products = [
  {
    image: "virtual_venue.png",
    title: "Virtual Venue",
    subtitle:
      "Create an immersive attendee experience with interactive programming for both digital and onsite audiences",
    linkText: "Explore Virtual Venue",
  },
  {
    image: "studio.png",
    title: "Studio by StreamYard",
    subtitle:
      "Produce professional, reliable streams easily leveraging StreamYard's innovative broadcast studio",
    linkText: "Explore Studio",
  },
  {
    image: "event_marketing.png",
    title: "Event Marketing",
    subtitle:
      "Promote your event with beautiful, easy to build landing pages designed to drive registrations and ticket sales",
    linkText: "Explore Event Marketing",
  },
  {
    image: "onsite.png",
    title: "Onsite",
    subtitle:
      "Optimize your in-person experience with best-in-class capabilities like badge printing and lead retrieval",
    linkText: "Explore Onsite",
  },
];

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <section id="products" className="products section__padding">
        <div className="products_info">
          <h2>One platform, endless potential</h2>
          <p>
            An all-in-one event management platform that makes planning,
            producing, and reliving event experiences easier than ever.
          </p>
        </div>
        <div className="product-list">
          {products.map((product) => (
            <React.Fragment key={product.title}>
              <ProductCard {...product} />
            </React.Fragment>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
