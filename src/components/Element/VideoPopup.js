import React, { useState } from "react";

const VideoPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Tombol Play */}
      <button
        onClick={() => setIsOpen(true)}
        className="play-btn border-0"
        style={{ backgroundColor: "transparent" }}
      >
        <i className="fas fa-play text-white"></i>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0, left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.8)",
            zIndex: 9999,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Konten Modal */}
          <div
            style={{
              position: "relative",
              width: "90%",
              maxWidth: "800px",
              aspectRatio: "16 / 9",
              backgroundColor: "#000",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/YBhdvQ1p5xQ?autoplay=1"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="YouTube Video"
              style={{
                width: "100%",
                height: "100%",
              }}
            ></iframe>

            {/* Tombol Close */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: "absolute",
                top: 10,
                right: 10,
                background: "transparent",
                border: "none",
                color: "#fff",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPopup;
