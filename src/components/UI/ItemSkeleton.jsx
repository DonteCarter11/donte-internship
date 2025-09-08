import React from "react";

const ItemSkeleton = () => {
  const skeletonBaseStyle = {
    background: "linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)",
    backgroundSize: "200% 100%",
    borderRadius: "4px",
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center">
          <div
            style={{
              ...skeletonBaseStyle,
              width: "100%",
              height: "400px",
              borderRadius: "8px",
              marginBottom: "30px",
            }}
          ></div>
        </div>

        <div className="col-md-6">
          <div className="item_info">
            <div
              style={{
                ...skeletonBaseStyle,
                height: "36px",
                width: "60%",
                marginBottom: "20px",
              }}
            ></div>

            <div
              style={{
                display: "flex",
                gap: "20px",
                marginBottom: "20px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <i className="fa fa-eye"></i>
                <div
                  style={{
                    ...skeletonBaseStyle,
                    height: "16px",
                    width: "30px",
                    marginLeft: "8px",
                    display: "inline-block",
                  }}
                ></div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <i className="fa fa-heart"></i>
                <div
                  style={{
                    ...skeletonBaseStyle,
                    height: "16px",
                    width: "30px",
                    marginLeft: "8px",
                    display: "inline-block",
                  }}
                ></div>
              </div>
            </div>

            {/* Description skeleton */}
            <div style={{ margin: "20px 0" }}>
              <div
                style={{
                  ...skeletonBaseStyle,
                  height: "16px",
                  width: "100%",
                  marginBottom: "8px",
                }}
              ></div>
              <div
                style={{
                  ...skeletonBaseStyle,
                  height: "16px",
                  width: "100%",
                  marginBottom: "8px",
                }}
              ></div>
              <div
                style={{
                  ...skeletonBaseStyle,
                  height: "16px",
                  width: "75%",
                  marginBottom: "8px",
                }}
              ></div>
            </div>

            <div className="d-flex flex-row">
              <div className="mr40">
                <h6>Owner</h6>
                <div
                  className="item_author"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div className="author_list_pp">
                    <div
                      style={{
                        ...skeletonBaseStyle,
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        marginRight: "15px",
                      }}
                    ></div>
                  </div>
                  <div className="author_list_info">
                    <div
                      style={{
                        ...skeletonBaseStyle,
                        height: "18px",
                        width: "120px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="de_tab tab_simple">
              <div className="de_tab_content">
                <h6>Creator</h6>
                <div
                  className="item_author"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <div className="author_list_pp">
                    <div
                      style={{
                        ...skeletonBaseStyle,
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        marginRight: "15px",
                      }}
                    ></div>
                  </div>
                  <div className="author_list_info">
                    <div
                      style={{
                        ...skeletonBaseStyle,
                        height: "18px",
                        width: "120px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="spacer-40"></div>

              <h6>Price</h6>
              <div
                className="nft-item-price"
                style={{ display: "flex", alignItems: "center" }}
              >
                <div
                  style={{
                    ...skeletonBaseStyle,
                    width: "24px",
                    height: "24px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                ></div>
                <div
                  style={{
                    ...skeletonBaseStyle,
                    height: "24px",
                    width: "80px",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemSkeleton;
