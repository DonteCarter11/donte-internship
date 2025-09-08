import React from "react";

const Skeleton = () => {
  return (
    <div className="d_profile de-flex">
      <div className="de-flex-col">
        <div className="profile_avatar">
          <div
            style={{
              width: "150px",
              height: "150px",
              backgroundColor: "#f0f0f0",
              borderRadius: "50%",
              animation: "pulse 1.5s ease-in-out infinite alternate",
            }}
          />
          <div className="profile_name">
            <div
              style={{
                height: "30px",
                backgroundColor: "#f0f0f0",
                marginBottom: "10px",
                width: "200px",
                animation: "pulse 1.5s ease-in-out infinite alternate",
              }}
            />
            <div
              style={{
                height: "20px",
                backgroundColor: "#f0f0f0",
                marginBottom: "10px",
                width: "150px",
                animation: "pulse 1.5s ease-in-out infinite alternate",
              }}
            />
            <div
              style={{
                height: "20px",
                backgroundColor: "#f0f0f0",
                marginBottom: "10px",
                width: "250px",
                animation: "pulse 1.5s ease-in-out infinite alternate",
              }}
            />
          </div>
        </div>
      </div>
      <div className="profile_follow de-flex">
        <div className="de-flex-col">
          <div
            style={{
              height: "20px",
              backgroundColor: "#f0f0f0",
              marginBottom: "10px",
              width: "100px",
              animation: "pulse 1.5s ease-in-out infinite alternate",
            }}
          />
          <div
            style={{
              height: "40px",
              backgroundColor: "#f0f0f0",
              width: "80px",
              borderRadius: "4px",
              animation: "pulse 1.5s ease-in-out infinite alternate",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
