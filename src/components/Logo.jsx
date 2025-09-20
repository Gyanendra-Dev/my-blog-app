// import React from 'react'

// function Logo({ width = "100px" }) {
//   return (
//     <div style={{ width }}>
//       <img 
//         src="/logo.png" 
//         alt="Logo" 
//         className="w-full h-auto"
//         onError={(e) => {
//           e.target.style.display = 'none'
//           e.target.nextSibling.style.display = 'block'
//         }}
//       />
//       <div 
//         style={{ display: 'none', width, height: '40px' }} 
//         className="bg-blue-500 text-white flex items-center justify-center rounded font-bold"
//       >
//         LOGO
//       </div>
//     </div>
//   )
// }

// export default Logo


import React from 'react'

function Logo({ width = "100px" }) {
  return (
    <div style={{ width }}>
      <img 
        src="/images/vibe-diary-logo.png" 
        alt="Vibe Diary Logo" 
        className="w-32 h-auto"
        onError={(e) => {
          e.target.style.display = 'none'
          e.target.nextSibling.style.display = 'flex'
        }}
      />
      <div 
        style={{ display: 'none', width, height: '40px' }} 
        className="bg-blue-500 text-white items-center justify-center rounded font-bold"
      >
        LOGO
      </div>
    </div>
  )
}

export default Logo
