import React from "react";
import backgroundImage from "../../assets/images/profile.jpg";

const Contact = () => {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
        <p className="text-white">
          Feel free to reach out to us for any inquiries.
        </p>
        <div className="mt-4">
          {/* Your contact form or other content goes here */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
