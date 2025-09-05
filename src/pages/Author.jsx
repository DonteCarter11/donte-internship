import React, { useEffect, useState } from "react";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "../components/UI/Skeleton";

function Author() {
  const [users, setUsers] = useState(null);

  const [loading, setLoading] = useState(true);
  const  {authorId}  = useParams();

  async function fetchUsers() {
    try {
      setLoading(true);
      const  {data}  = await axios.get(
        `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`
      );
      setUsers(data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  const skeletonItems = Array(8).fill(0);

  return (
    <>
      {loading ? (
        <>
          {skeletonItems.map((_, index) => (
            <Skeleton key={index} />
          ))}
        </>
      ) : (
        <>
          <div key={`${users.title}`} id="wrapper">
            <div className="no-bottom no-top" id="content">
              <div id="top"></div>

              <section
                id="profile_banner"
                aria-label="section"
                className="text-light"
                data-bgimage="url(images/author_banner.jpg) top"
              ></section>

              <section aria-label="section">
                <div className="container">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="d_profile de-flex">
                        <div className="de-flex-col">
                          <div className="profile_avatar">
                            <img src={users.authorImage} alt="" />

                            <i className="fa fa-check"></i>
                            <div className="profile_name">
                              <h4>
                                {users.authorName}
                                <span className="profile_username">
                                  @{users.tag}
                                </span>
                                <span id="wallet" className="profile_wallet">
                                  UDHUHWudhwd78wdt7edb32uidbwyuidhg7wUHIFUHWewiqdj87dy7
                                </span>
                                <button id="btn_copy" title="Copy Text">
                                  Copy
                                </button>
                              </h4>
                            </div>
                          </div>
                        </div>
                        <div className="profile_follow de-flex">
                          <div className="de-flex-col">
                            <div className="profile_follower">
                              573 followers
                            </div>
                            <Link to="#" className="btn-main">
                              Follow
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="de_tab tab_simple">
                        <AuthorItems />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Author;
