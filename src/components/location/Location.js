import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.5664167323803!2d-77.02515688464992!3d38.888160779572075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7b79cb8691d87%3A0x350463c3785a7599!2sHirshhorn+Museum!5e0!3m2!1sen!2sus!4v1541022811335"
        width="100%"
        height="500px"
        frameborder="0"
        allowFullScreen
      />
      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
