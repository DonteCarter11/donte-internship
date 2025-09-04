import React from "react";

const Skeleton = ({
  width = "100%",
  height = "20px",
  borderRadius = "4px",
}) => {
  return (
    <div
      className="skeleton-box"
      style={{
        width,
        height,
        borderRadius,
      }}
    >
      <div className="itm">
        <div className="nft__item">
          <div className="author_list_pp">
            <div
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "#e0e0e0",
                borderRadius: "50%",
                animation: "pulse 1.5s ease-in-out infinite alternate",
              }}
            />
          </div>
          <div
            style={{
              backgroundColor: "#e0e0e0",
              height: "20px",
              marginBottom: "10px",
              animation: "pulse 1.5s ease-in-out infinite alternate",
            }}
          />
          <div className="nft__item_wrap">
            <div
              style={{
                width: "100%",
                height: "200px",
                backgroundColor: "#e0e0e0",
                animation: "pulse 1.5s ease-in-out infinite alternate",
              }}
            />
          </div>
          <div className="nft__item_info">
            <div
              style={{
                height: "20px",
                backgroundColor: "#e0e0e0",
                marginBottom: "10px",
                animation: "pulse 1.5s ease-in-out infinite alternate",
              }}
            />
            <div
              style={{
                height: "16px",
                backgroundColor: "#e0e0e0",
                width: "60%",
                animation: "pulse 1.5s ease-in-out infinite alternate",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Skeleton };
