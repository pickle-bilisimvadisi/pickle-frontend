import React from 'react'

const Footer:React.FC = () => {
  return (
    <footer>
      <div className="w-full bg-default-900 text-default-400 py-6 px-4 text-center text-small">
        &copy; {new Date().getFullYear()} Pickle. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer