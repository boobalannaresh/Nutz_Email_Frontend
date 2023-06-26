import React from 'react';

export  function Navbar({get}) {

return (
  <div>
      <h1 className='text-center my-4 text-primary'>✉ Email: nodemaileraccess@gmail.com </h1>
      <h5 className='text-center my-4 text-secondary'>Email Messages <span className='text-center my-4 text-danger' >{get.length}</span> list</h5>
  </div>
)
}
