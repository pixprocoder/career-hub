import React from "react";

const Blog = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">React Blog</h2>
      <div className="text-gray-700">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at
          mauris eget odio vehicula mattis. Duis vitae turpis eu odio tempus
          gravida id vitae urna. Sed feugiat neque et nisl feugiat vestibulum.
          Vestibulum at tellus et purus lacinia tristique. Integer lacinia massa
          ut urna luctus ultrices. Suspendisse sed mi eu lorem finibus
          dignissim.
        </p>
        <p className="mb-4">
          Sed sit amet odio vel metus commodo mattis at eget nunc. Aliquam
          ullamcorper semper risus, ac posuere ex semper in. Aliquam suscipit
          lacus non aliquet lobortis. Morbi gravida, ipsum vitae aliquam
          consequat, risus massa bibendum erat, ac facilisis justo orci eu
          metus. Mauris dictum aliquet risus non sagittis.
        </p>
      </div>
      <div className="text-gray-500 text-sm flex justify-between">
        <span>Published: June 30, 2023</span>
        <span>Author: John Doe</span>
      </div>
    </div>
  );
};

export default Blog;
