// import React, { useId } from 'react'

// const Input = React.forwardRef(function Input({
//   label,
//   type = "text",
//   className = "",
//   ...props
// }, ref) {
//   const id = useId()
  
//   return (
//     <div className='w-full'>
//       {label && (
//         <label 
//           className='inline-block mb-1 pl-1' 
//           htmlFor={id}
//         >
//           {label}
//         </label>
//       )}
//       <input
//         type={type}
//         className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
//         ref={ref}
//         {...props}
//         id={id}
//       />
//     </div>
//   )
// })

// export default Input




// import React, { useId } from 'react';

// const Input = React.forwardRef(function Input(
//   { label, type = "text", className = "", id: customId, ...props },
//   ref
// ) {
//   const reactId = useId();
//   // Prefer user-supplied id (e.g., id="title"), otherwise fallback to reactId
//   const inputId = customId || props.name || reactId;

//   return (
//     <div className="w-full">
//       {label && (
//         <label
//           className="inline-block mb-1 pl-1"
//           htmlFor={inputId}
//         >
//           {label}
//         </label>
//       )}
//       <input
//         id={inputId}
//         name={props.name}       // ensure name is passed down for RHF
//         type={type}
//         className={`px-3 py-2 rounded-lg bg-white text-black outline-none 
//           focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
//         ref={ref}
//         {...props}
//       />
//     </div>
//   );
// });

// export default Input;



// import React from "react";

// const Input = React.forwardRef(function Input(
//   { label, type = "text", id, name, className = "", ...props },
//   ref
// ) {
//   // Prefer explicit id, otherwise fall back to name
//   const inputId = id || name;

//   return (
//     <div className="w-full">
//       {label && inputId && (
//         <label
//           className="inline-block mb-1 pl-1"
//           htmlFor={inputId}
//         >
//           {label}
//         </label>
//       )}
//       <input
//         id={inputId}
//         name={name}
//         type={type}
//         ref={ref}
//         className={`px-3 py-2 rounded-lg bg-white text-black outline-none 
//           focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
//         {...props}
//       />
//     </div>
//   );
// });

// export default Input;

import React from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", id, name, className = "", ...props },
  ref
) {
  // If no explicit id provided, fall back to name (important for RHF)
  const inputId = id || name;

  return (
    <div className="w-full">
      {label && inputId && (
        <label
          className="inline-block mb-1 pl-1"
          htmlFor={inputId}
        >
          {label}
        </label>
      )}
      <input
        id={inputId}
        name={name}
        type={type}
        ref={ref}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none 
          focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        {...props}
      />
    </div>
  );
});

export default Input;