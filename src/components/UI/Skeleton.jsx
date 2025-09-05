import React from "react";

const Skeleton = () => {
  return (
    <div
              // key={index}
              className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
              style={{ display: "block", backgroundSize: "cover" }}
            >
              <div className="nft__item">
                <div className="author_list_pp">
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor: "#f0f0f0",
                      borderRadius: "50%",
                      animation: "pulse 1.5s ease-in-out infinite alternate",
                    }}
                  />
                </div>
                <div
                  className="de_countdown"
                  style={{
                    backgroundColor: "#f0f0f0",
                    height: "20px",
                    animation: "pulse 1.5s ease-in-out infinite alternate",
                    marginBottom: "10px",
                  }}
                />

                <div className="nft__item_wrap">
                  <div className="nft__item_extra">
                    <div className="nft__item_buttons">
                      <div
                        style={{
                          backgroundColor: "#f0f0f0",
                          height: "30px",
                          borderRadius: "4px",
                          animation:
                            "pulse 1.5s ease-in-out infinite alternate",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      height: "200px",
                      backgroundColor: "#f0f0f0",
                      animation: "pulse 1.5s ease-in-out infinite alternate",
                    }}
                  />
                </div>
                <div className="nft__item_info">
                  <div
                    style={{
                      height: "20px",
                      backgroundColor: "#f0f0f0",
                      marginBottom: "10px",
                      animation: "pulse 1.5s ease-in-out infinite alternate",
                    }}
                  />
                  <div
                    style={{
                      height: "16px",
                      backgroundColor: "#f0f0f0",
                      width: "60%",
                      marginBottom: "8px",
                      animation: "pulse 1.5s ease-in-out infinite alternate",
                    }}
                  />
                  <div
                    style={{
                      height: "16px",
                      backgroundColor: "#f0f0f0",
                      width: "40px",
                      animation: "pulse 1.5s ease-in-out infinite alternate",
                    }}
                  />
                </div>
              </div>
            </div>
  );
};

export default Skeleton;
