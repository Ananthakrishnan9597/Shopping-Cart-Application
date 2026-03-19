import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Search({ setKeyword }) {
  const [localKeyword, setLocalKeyword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const searchHandler = () => {
    setKeyword(localKeyword);
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <>
      <div className="input-group">
        <input
          type="text"
          id="search_field"
          className="form-control"
          placeholder="Enter Product Name ..."
          onChange={(e) => setLocalKeyword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && searchHandler()}
        />
        <div className="input-group-append">
          <button id="search_btn" className="btn" onClick={searchHandler}>
            <i className="fa fa-search" aria-hidden="true">search</i>
          </button>
        </div>
      </div>
    </>
  )
}
export default Search
