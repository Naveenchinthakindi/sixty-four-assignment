import React, { useEffect, useState } from "react";
import Card from "./Card";
import ContentCard from "./ContentCard";
import News from "./News";
import "./Style.css";

const Home = () => {

  //static data for mainsection cards
  const data = [
    {
      title: "State of Markets",
      image:
        "https://res.cloudinary.com/dhtoazrsr/image/upload/v1713870362/sityfourdata/image1.webp",
      content:
        "Content matters when we are trying to solve problems and discover new solutions.",
    },
    {
      title: "The Central Capex",
      image:
        "https://res.cloudinary.com/dhtoazrsr/image/upload/v1713870354/sityfourdata/image2.jpg",
      content:
        "Content matters when we are trying to solve problems and discover new solutions.",
    },
    {
      title: "Direct Tax",
      image:
        "https://res.cloudinary.com/dhtoazrsr/image/upload/v1713870349/sityfourdata/image3.jpg",
      content:
        "Content matters when we are trying to solve problems and discover new solutions. ",
    },
    {
      title: "Banking Moniter",
      image:
        "https://res.cloudinary.com/dhtoazrsr/image/upload/v1713870343/sityfourdata/image4.webp",
      content:
        "Content matters when we are trying to solve problems and discover new solutions.",
    },
    {
      title: "Title 4",
      image:
        "https://res.cloudinary.com/dhtoazrsr/image/upload/v1705894758/samples/landscapes/landscape-panorama.jpg",
      content:
        "Content matters when we are trying to solve problems and discover new solutions. ",
    },
    {
      title: "Title 5",
      image:
        "https://res.cloudinary.com/dhtoazrsr/image/upload/v1705894757/samples/landscapes/nature-mountains.jpg",
      content:
        "Content matters when we are trying to solve problems and discover new solutions.",
    },
    {
      title: "Title 6",
      image:
        "https://res.cloudinary.com/dhtoazrsr/image/upload/v1705894753/samples/landscapes/beach-boat.jpg",
      content:
        "Content matters when we are trying to solve problems and discover new solutions.",
    },
    {
      title: "Title 8",
      image:
        "https://res.cloudinary.com/dhtoazrsr/image/upload/v1705894752/samples/landscapes/architecture-signs.jpg",
      content:
        "Content matters when we are trying to solve problems and discover new solutions.",
    },
    {
      title: "Title 9",
      image:
        "https://res.cloudinary.com/dhtoazrsr/image/upload/v1705894749/samples/landscapes/girl-urban-view.jpg",
      content:
        "Content matters when we are trying to solve problems and discover new solutions.",
    },
    {
      title: "Title 10",
      image:
        "https://res.cloudinary.com/dhtoazrsr/image/upload/v1705894754/samples/ecommerce/leather-bag-gray.jpg",
      content:
        "Content matters when we are trying to solve problems and discover new solutions.",
    },
    {
      title: "Title 11",
      image:
        "https://res.cloudinary.com/dhtoazrsr/image/upload/v1713870343/sityfourdata/image4.webp",
      content:
        "Content matters when we are trying to solve problems and discover new solutions.",
    },
    {
      title: "Title 12",
      image:
        "https://res.cloudinary.com/dhtoazrsr/image/upload/v1705894754/samples/ecommerce/leather-bag-gray.jpg",
      content:
        "Content matters when we are trying to solve problems and discover new solutions.",
    },
    {
      title: "Title 11",
      image:
        "https://res.cloudinary.com/dhtoazrsr/image/upload/v1713870343/sityfourdata/image4.webp",
      content:
        "Content matters when we are trying to solve problems and discover new solutions.",
    },
  ];
  
  //static data for top section cards
  const cards =[
    {
      "id": 0,
      "title": "Lorem ipsum",
      "date": "23-04-2023",
      "color": "orange"
    },
    {
      "id": 1,
      "title": "Dolor sit amet",
      "date": "15-06-2022",
      "color": "pink"
    },
    {
      "id": 2,
      "title": "Consectetur adipiscing elit",
      "date": "07-12-2024",
      "color": "green"
    },
    {
      "id": 3,
      "title": "Sed do eiusmod tempor",
      "date": "28-08-2022",
      "color": "lightblue"
    },
    {
      "id": 4,
      "title": "Ut labore et dolore magna",
      "date": "19-11-2023",
      "color": "lightgreen"
    }
  ]

  //state variable
  const [userData, setUserData] = useState([]);
  const [indexNumber, setIndexNumber] = useState(0);
  const [left, setLeft] = useState(false);
  const [right, setRight] = useState(false);


  // useEffect to update userDatabased on indexNumber changes
  useEffect(() => {
    if (left || right) {
      const initialData = data.slice(indexNumber, indexNumber + 4);
      setUserData([...initialData]);
    } else {
      const initialData = data.slice(0, indexNumber + 4);
      setUserData([...initialData]);
    }
  }, [indexNumber]);

  // Function to load more data
  const handleMoreData = () => {
    setIndexNumber(indexNumber + 4);
  };

  // Function to handle previous button click
  const handlePrevious = () => {
    if (indexNumber > 0) {
      setIndexNumber(indexNumber - 4);
    }
  };

  // Function to handle next button click
  const handleNext = () => {
    if (indexNumber >= 0 && indexNumber<=data.length) {
      setIndexNumber(indexNumber + 4);
      setRight(true);
    }
  };

  return (
    <div>
      {/* Header */}
      <header>
        <div className="header">
          <div>
            <h6>Good Afternoon, Akshay</h6>
            <p style={{ color: "gray", fontSize: "10px" }}>
              You are Subscribe to Retail Plan
            </p>
          </div>
          <div>
            <p>
            <i class="fa-regular fa-calendar"></i>&nbsp; Today 14 February{" "}
            <i class="fa-regular fa-clock"></i>&nbsp; 16:42 &nbsp;&nbsp;&nbsp;
            <i class="fa-regular fa-bell"></i>
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* top card section */}
        <section className="cardbox">
          {cards.map((i) => (
            <Card key={i} item={i} />
          ))}
        </section>

        {/* Body Container */}
        <section className="body-container">
          {/* body card section */}
          <div className="bodycards">
            <button className="arrow">
            <i class="fa-solid fa-circle-arrow-left"  onClick={handlePrevious}></i>
            </button>
            <div className="text-center">
              <div className="subcards">
                {userData.map((item, innerIndex) => (
                  <ContentCard key={innerIndex} user={item} />
                ))}
              </div>
              <button className="btn btn-dark" onClick={handleMoreData}>
                View More
              </button>
              <div style={{ fontSize: "24px", marginTop: "10px" }}>
                {[0, 1, 2, 3].map((idx) => (
                  <span
                    key={idx}
                    style={{
                      color: idx === indexNumber / 4 ? "black" : "gray",
                      marginRight: "10px",
                    }}
                  >
                    &bull;
                  </span>
                ))}
              </div>
            </div>
            <button className="arrow">
            <i class="fa-solid fa-circle-arrow-right"  onClick={handleNext}></i>
            </button>
          </div>

          {/* Recent Release section */}
          <section className="newscontainer">
            <News />
          </section>
        </section>
      </main>
    </div>
  );
};

export default Home;