import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HotCollections() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
        },
      },
    ],
  };

  // Skeleton loading items
  const skeletonItems = Array(4).fill(0);

  async function fetchUsers() {
    try {
      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections`
      );
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>

          <div
            className="col-lg-12 position-relative"
            style={{ marginRight: "10px" }}
          >
            <div>
                {/* Previous Button - Positioned on the left side */}
                <button
                  type="button"
                  role="presentation"
                  className=""
                  onClick={previous}
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "50%",
                    color: "#000",
                    cursor: "pointer",
                    height: "45px",
                    position: "absolute",
                    left: "-6px", // Position outside the container on the left
                    top: "50%",
                    transform: "translateY(-50%)", // Center vertically
                    width: "45px",
                    zIndex: "100",
                    padding: "0",
                    display: "inline-block",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <span aria-label="Previous" style={{ fontSize: "30px" }}>
                    ‹
                  </span>
                </button>

                {/* Next Button - Positioned on the right side */}
                <button
                  type="button"
                  role="presentation"
                  className=""
                  onClick={next}
                  style={{
                    backgroundColor: "white",
                    border: "1px solid #ccc",
                    borderRadius: "50%",
                    color: "#000",
                    cursor: "pointer",
                    height: "45px",
                    position: "absolute",
                    right: "-6px", // Position outside the container on the right
                    top: "50%",
                    transform: "translateY(-50%)", // Center vertically
                    width: "45px",
                    zIndex: "100",
                    padding: "0",
                    display: "inline-block",
                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                  }}
                >
                  <span style={{ fontSize: "30px" }}> ›</span>
                </button>
              </div>
            {loading ? (
              <Slider
                ref={(slider) => {
                  sliderRef = slider;
                }}
                {...settings}
              >
                {skeletonItems.map((_, index) => (
                  <div key={index}>
                    <div className="nft_coll">
                      <div className="nft_wrap">
                        <div
                          className="skeleton-box"
                          style={{
                            width: "100%",
                            borderRadius: "10px",
                            backgroundColor: "#e0e0e0",
                            animation: "pulse 1.5s infinite",
                          }}
                        ></div>
                      </div>
                      <div className="nft_coll_pp">
                        <div
                          className="skeleton-box"
                          style={{
                            width: "60px",
                            height: "60px",
                            borderRadius: "50%",
                            backgroundColor: "#e0e0e0",
                            margin: "0 auto",
                            position: "relative",
                            animation: "pulse 1.5s infinite",
                          }}
                        ></div>
                        <i className="fa fa-check" style={{ opacity: 0 }}></i>
                      </div>
                      <div className="nft_coll_info text-center">
                        <div
                          className="skeleton-box"
                          style={{
                            width: "120px",
                            height: "20px",
                            backgroundColor: "#e0e0e0",
                            margin: "10px auto 8px",
                            borderRadius: "4px",
                            animation: "pulse 1.5s infinite",
                          }}
                        ></div>
                        <div
                          className="skeleton-box"
                          style={{
                            width: "80px",
                            height: "16px",
                            backgroundColor: "#e0e0e0",
                            margin: "0 auto",
                            borderRadius: "4px",
                            animation: "pulse 1.5s infinite",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            ) : (
              <Slider
                ref={(slider) => {
                  sliderRef = slider;
                }}
                {...settings}
              >
                {users.map((profile) => (
                  <div key={`${profile.title}`}>
                    <div className="nft_coll" style={{ marginRight: "10px" }}>
                      <div className="nft_wrap">
                        <Link to="/item-details">
                          <img
                            src={profile.nftImage}
                            className="lazy img-fluid"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="nft_coll_pp">
                        <Link to="/author">
                          <img
                            className="lazy pp-coll"
                            src={profile.authorImage}
                            alt=""
                          />
                        </Link>
                        <i className="fa fa-check"></i>
                      </div>
                      <div className="nft_coll_info">
                        <Link to="/explore">
                          <h4>{profile.title}</h4>
                        </Link>
                        <span>ERC-192</span>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HotCollections;
