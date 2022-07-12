const header = (props) => {
  return (
    <>
      <header>
        <nav className='nav'>
          <a className='home' href='HOME'>
            Home {props.res}
          </a>

          <button className='nav btn-login'>Login</button>
        </nav>
      </header>
    </>
  );
};

export default header;
