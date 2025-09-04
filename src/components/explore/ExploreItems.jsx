import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Counter from "../Counter";

const ExploreItems = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 8;
  const [visibleItems, setVisibleItems] = useState(itemsPerPage);
  const [filter, setFilter] = useState("");

  const skeletonItems = Array(8).fill(0);


  async function fetchUsers(filterValue = "") {
    try {
      const baseUrl =
        "https://us-central1-nft-cloud-functions.cloudfunctions.net/explore";
      const apiUrl = `${baseUrl}${filterValue ? `?filter=${filterValue}` : ""}`;

      const { data } = await axios.get(apiUrl);
      setUsers(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  const handleFilterChange = (event) => {
    const selectedFiler = event.target.value;
    setFilter(selectedFiler);
    fetchUsers(selectedFiler);
  };

  useEffect(() => {

      fetchUsers();
  }, []);

  const loadMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  const hasMoreItems = visibleItems < users.length;

  return (
    <>
      <div>
        <select
          id="filter-items"
          defaultValue=""
          value={filter}
          onChange={handleFilterChange}
        >
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>
      {loading ? (
        <>
          {skeletonItems.map((_, index) => (
                  <div key={index} className="itm">
                    <div className="nft__item">
                      <div className="author_list_pp">
                        <div
                          style={{
                            width: "50px",
                            height: "50px",
                            backgroundColor: "#f0f0f0",
                            borderRadius: "50%",
                            animation:
                              "pulse 1.5s ease-in-out infinite alternate",
                          }}
                        />
                      </div>
                      <div
                        className="de_countdown"
                        style={{
                          backgroundColor: "#f0f0f0",
                          height: "20px",
                          animation:
                            "pulse 1.5s ease-in-out infinite alternate",
                        }}
                      />
                      <div className="nft__item_wrap ">
                        <div
                          style={{
                            width: "100%",
                            height: "200px",
                            backgroundColor: "#f0f0f0",
                            animation:
                              "pulse 1.5s ease-in-out infinite alternate",
                          }}
                        />
                      </div>
                      <div className="nft__item_info">
                        <div
                          style={{
                            height: "20px",
                            backgroundColor: "#f0f0f0",
                            marginBottom: "10px",
                            animation:
                              "pulse 1.5s ease-in-out infinite alternate",
                          }}
                        />
                        <div
                          style={{
                            height: "16px",
                            backgroundColor: "#f0f0f0",
                            width: "60%",
                            animation:
                              "pulse 1.5s ease-in-out infinite alternate",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
        </>
      ) : (
        <>
          {users.slice(0, visibleItems).map((profile) => (
            <div
              key={profile.id}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <div className="nft__item">
                <div className="author_list_pp">
                  <Link
                    to="/author"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                  >
                    <img className="lazy" src={profile.authorImage} alt="" />
                    <i className="fa fa-check"></i>
                  </Link>
                </div>

              {profile.expiryDate && (
                <div className="de_countdown">
                  <Counter expiryDate={profile.expiryDate} className />
                </div>
              )}

                <div className="nft__item_wrap">
                  <div className="nft__item_extra">
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
                  </div>
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
                    <h4>{profile.title}</h4>
                  </Link>
                  <div className="nft__item_price">{profile.price} ETH</div>
                  <div className="nft__item_like">
                    <i className="fa fa-heart"></i>
                    <span>{profile.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}

      <div className="col-md-12 text-center">
        {hasMoreItems && (
          <Link
            to=""
            id="loadmore"
            className="btn-main lead"
            onClick={loadMore}
          >
            Load more
          </Link>
        )}
      </div>
    </>
  );
};

export default ExploreItems;
