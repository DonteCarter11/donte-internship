import React from "react";
import { Link } from "react-router-dom";
import Skeleton from "../UI/Skeleton";

function AuthorItems({ authorData, authorId, users, loading = false }) {
  const skeletonItems = Array(8).fill(0);
  
  const data = authorData || users;

  return (
    <>
      {loading ? (
        <div className="de_tab_content">
          <div className="tab-1">
            <div className="row">
              {skeletonItems.map((_, index) => (
                <Skeleton key={index} />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="de_tab_content">
          <div className="tab-1">
            <div className="row">
              {data?.nftCollection &&
                Array.isArray(data.nftCollection) &&
                data.nftCollection.map((nft, index) => (
                  <div
                    key={nft.id || index}
                    className="col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  >
                    <div className="nft__item">
                      <div className="author_list_pp">
                        <Link to="">
                          <img
                            className="lazy"
                            src={data.authorImage || "placeholder.jpg"}
                            alt=""
                          />
                          <i className="fa fa-check"></i>
                        </Link>
                      </div>
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
                        <Link to={`/item-details/${nft.nftId || nft.id}`}>
                          <img
                            src={nft.nftImage || "placeholder.jpg"}
                            className="lazy nft__item_preview"
                            alt={nft.title || "NFT"}
                          />
                        </Link>
                      </div>
                      <div className="nft__item_info">
                        <Link to={`/item-details/${nft.nftId || nft.id}`}>
                          <h4>{nft.title || "Untitled"}</h4>
                        </Link>
                        <div className="nft__item_price">
                          {nft.price || "0"} ETH
                        </div>
                        <div className="nft__item_like">
                          <i className="fa fa-heart"></i>
                          <span>{nft.likes || "0"}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AuthorItems;