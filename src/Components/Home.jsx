import React from 'react'

const Home = ({urlHandle}) => {
  const HandleSubmit = (e) => {
    e.preventDefault();
    urlHandle(e.target[0].value);
  }
  return (
    <>
      <div>
        This is home
      </div>
      <form onSubmit={HandleSubmit}>
      <div>
        <label htmlFor="userlink" />
        <input type='text' name='userlink' />
      </div>
        <button type="submit">Generate</button>
      </form>
    </>
  )
}

export default Home;
