import React, { useState } from 'react';
import { PostsDb } from '../Dbs/imageDB';

const StackedGallery = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleGallery = () => setExpanded(!expanded);

  return (
    <div className="p-4">
      {/* COLLAPSED: STACKED VIEW */}
      {!expanded && (
        <div
          onClick={toggleGallery}
          className="relative w-[180px] h-[260px] cursor-pointer"
        >
          {PostsDb.slice(0, 5).map((post, index) => (
            <img
              key={index}
              src={post.url}
              alt={`Preview ${index}`}
              className="absolute w-full h-full object-cover rounded-xl border"
              style={{
                top: `${index * 4}px`,
                left: `${index * 4}px`,
                zIndex: index,
              }}
            />
          ))}
        </div>
      )}

      {/* EXPANDED: FULL VIEW */}
      {expanded && (
        <div>
          <button
            onClick={toggleGallery}
            className="mb-4 bg-black text-white px-4 py-1 rounded"
          >
            Close
          </button>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {PostsDb.map((post, index) => (
              <img
                key={index}
                src={post.url}
                alt={`Post ${index}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default StackedGallery;
// import React from 'react';
// import PostsDb from '../imageDB';
// import { motion, AnimatePresence } from 'framer-motion';

// const StackedGallery = ({ openModal, selectedImage, closeModal }) => {
//   return (
//     <div className="relative w-[400px] h-[280px] cursor-pointer">
//       {PostsDb.slice(0, 5).map((post, i) => (
//         <motion.img
//           key={i}
//           src={post.url}
//           alt=""
//           className="absolute w-40 h-60 object-cover rounded-xl shadow-xl"
//           style={{ zIndex: 5 - i }}
//           animate={{
//             rotate: i * 10 - 20,
//             x: i * 60,
//             y: Math.abs(i - 2) * -10,
//             scale: 1,
//           }}
//           transition={{ type: 'spring', stiffness: 300, damping: 25 }}
//           onClick={() => openModal(post)}
//         />
//       ))}

//       {/* Fullscreen Modal */}
//       <AnimatePresence>
//         {selectedImage && (
//           <motion.div
//             className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-60 backdrop-blur-md flex items-center justify-center z-50"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={closeModal}
//           >
//             <motion.div
//               className="bg-white rounded-2xl shadow-2xl p-6 max-w-lg w-full flex flex-col items-center"
//               initial={{ scale: 0.8, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.8, opacity: 0 }}
//               onClick={(e) => e.stopPropagation()}
//             >
//               <img
//                 src={selectedImage.url}
//                 alt="Full view"
//                 className="rounded-xl w-full max-h-[60vh] object-cover mb-4"
//               />
//               <div className="flex items-center space-x-4">
//                 <img
//                   src={selectedImage.profilePic}
//                   alt="profile"
//                   className="w-12 h-12 rounded-full border-2 border-gray-300"
//                 />
//                 <div>
//                   <p className="font-semibold">{selectedImage.name}</p>
//                   <p className="text-gray-500 text-sm">{selectedImage.description}</p>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default StackedGallery;

