import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TopSellers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchUsers() {
    try {
      const { data } = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/topSellers`
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

  const Skeleton = () => {
    return (
      <div>
        <ol className="author_list">
          {[...Array(12)].map((_, index) => (
            <li key={index}>
              <div className="author_list_pp">
                <div className="skeleton-avatar pp-author skeleton"></div>
              </div>
              <div className="author_list_info ">
                <div className="skeleton-text skeleton"></div>
                <div className="skeleton-price skeleton"></div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    );
  };

  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div className="col-md-12">
            {loading ? (
              <>
                <Skeleton />
              </>
            ) : (
              <>
                <ol className="author_list">
                  {users.map((profile) => (
                    <li key={`${profile.id}`}>
                      <div className="author_list_pp">
                        <Link to="/author">
                          <img
                            className="lazy pp-author "
                            src={profile.authorImage}
                            alt=""
                          />
                          <i className="fa fa-check"></i>
                        </Link>
                      </div>
                      <div className="author_list_info ">
                        <Link to="/author">{profile.authorName}</Link>
                        <span>{profile.price} ETH</span>
                      </div>
                    </li>
                  ))}
                </ol>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
