import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import AuthorImage from "../../images/author_thumbnail.jpg";
import nftImage from "../../images/nftImage.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const NewItems = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [countdowns, setCountdowns] = useState({});

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

  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const calculateTimeLeft = (expiryDate) => {
    const now = new Date().getTime();
    const targetTime = new Date(expiryDate).getTime();
    const difference = targetTime - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds, expired: false };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true };
  };

  const formatCountdown = (timeLeft) => {
    if (timeLeft.expired) {
      return "EXPIRED";
    }

    const parts = [];
    if (timeLeft.days > 0) parts.push(`${timeLeft.days}d`);
    if (timeLeft.hours > 0) parts.push(`${timeLeft.hours}h`);
    if (timeLeft.minutes > 0) parts.push(`${timeLeft.minutes}m`);
    parts.push(`${timeLeft.seconds}s`);

    return parts.join(" ");
  };

  const skeletonItems = Array(4).fill(0);

  async function fetchUsers() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/newItems`
      );
      setUsers(data);

      const initialCountdowns = {};
      data.forEach((item, index) => {
        if (item.expiryDate) {
          initialCountdowns[index] = calculateTimeLeft(item.expiryDate);
        }
      });
      setCountdowns(initialCountdowns);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (users.length === 0) return;

    const timer = setInterval(() => {
      const updatedCountdowns = {};
      users.forEach((item, index) => {
        if (item.expiryDate) {
          updatedCountdowns[index] = calculateTimeLeft(item.expiryDate);
        }
      });
      setCountdowns(updatedCountdowns);
    }, 1000);

    return () => clearInterval(timer);
  }, [users]);

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 position-relative">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
            <div>
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
                  left: "-6px",
                  top: "50%",
                  transform: "translateY(-50%)",
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
                  right: "-6px",
                  top: "50%",
                  transform: "translateY(-50%)",
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

            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              {loading
                ? 
                  skeletonItems.map((_, index) => (
                    <div key={index} className="itm">
                      <div className="nft__item">
                        <div className="author_list_pp">
                          <div
                            style={{
                              width: "50px",
                              height: "50px",
                              backgroundColor: "#e0e0e0",
                              borderRadius: "50%",
                              animation:
                                "pulse 1.5s ease-in-out infinite alternate",
                            }}
                          />
                        </div>
                        <div
                          style={{
                            backgroundColor: "#e0e0e0",
                            height: "20px",
                            marginBottom: "10px",
                            animation:
                              "pulse 1.5s ease-in-out infinite alternate",
                          }}
                        />
                        <div className="nft__item_wrap">
                          <div
                            style={{
                              width: "100%",
                              height: "200px",
                              backgroundColor: "#e0e0e0",
                              animation:
                                "pulse 1.5s ease-in-out infinite alternate",
                            }}
                          />
                        </div>
                        <div className="nft__item_info">
                          <div
                            style={{
                              height: "20px",
                              backgroundColor: "#e0e0e0",
                              marginBottom: "10px",
                              animation:
                                "pulse 1.5s ease-in-out infinite alternate",
                            }}
                          />
                          <div
                            style={{
                              height: "16px",
                              backgroundColor: "#e0e0e0",
                              width: "60%",
                              animation:
                                "pulse 1.5s ease-in-out infinite alternate",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))
                :
                  users.map((profile, index) => (
                    <div key={`${profile.title}-${index}`} className="itm">
                      <div className="nft__item">
                        <div className="author_list_pp">
                          <Link
                            to="/author"
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title="Creator: Monica Lucas"
                          >
                            <img
                              className="lazy"
                              src={profile.authorImage}
                              alt=""
                            />
                            <i className="fa fa-check"></i>
                          </Link>
                        </div>

                        {profile.expiryDate &&
                          countdowns[index] &&
                          !countdowns[index].expired && (
                            <div className="de_countdown">
                              {formatCountdown(countdowns[index])}
                            </div>
                          )}

                        <div className="nft__item_wrap">
                          {/* <div className="nft__item_extra">
                            <div className="nft__item_buttons">
                              <button>Buy Now</button>
                              <div className="nft__item_share">
                                <h4>Share</h4>
                                <a href="" target="_blank" rel="noreferrer">
                                  <i className="fa fa-facebook fa-lg"></i>
                                </a>
                                <a href="" target="_blank" rel="noreferrer">
                                  <i className="fa fa-twitter fa-lg"></i>
                                </a>
                                <a href="">
                                  <i className="fa fa-envelope fa-lg"></i>
                                </a>
                              </div>
                            </div>
                          </div> */}

                          <Link to="/item-details">
                            <img
                              src={profile.nftImage}
                              className="lazy nft__item_preview"
                              alt=""
                            />
                          </Link>
                        </div>
                        <div className="nft__item_info">
                          <Link to="/item-details">
                            <h4>{profile.title || "Pinky Ocean"}</h4>
                          </Link>
                          <div className="nft__item_price">
                            {profile.price || "3.08 ETH"}
                          </div>
                          <div className="nft__item_like">
                            <i className="fa fa-heart"></i>
                            <span>{profile.likes || "69"}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewItems;
