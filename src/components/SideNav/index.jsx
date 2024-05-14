import React from "react";

const Sidenav = () => {
  const menu = [
    { title: "Woman's Fashion", link: "" },
    { title: "Men's Fashion", link: "" },
    { title: "Electronics", link: "" },
    { title: "Home & Lifestyle", link: "" },
    { title: "Medicine", link: "" },
    { title: "Sports & Outdoor", link: "" },
    { title: "Medicine", link: "" },
    { title: "Baby's & Toys", link: "" },
    { title: "Medicine", link: "" },
    { title: "Groceries & Pets", link: "" },
    { title: "Health & Beauty", link: "" },
  ];

  return (
    <div className="border-r pr-24 pt-5">
      {menu.map((item) => {
        return <div className="my-3 cursor-pointer">{item?.title}</div>;
      })}
    </div>
  );
};

export default Sidenav;
