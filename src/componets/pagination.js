
import React from 'react';

const Pagination = ({ prev, next, onPrevious, onNext }) => {

  const handleClickPrevious = () => {
    onPrevious();
  }

  const handleClickNext = () => {
    onNext();
  }


  return (
    <nav className='my-5'>
      <ul className="pagination justify-content-center">
        {
          prev ?
            <li className="page-item">
              <button
                className="page-link btn btn-primary"
                onClick={handleClickPrevious}
              >Previous
              </button>
            </li>
            : null
        }
        {
          next ?
            <li className="page-item">
              <button
                className="page-link btn btn-secondary"
                onClick={handleClickNext}
              >Next
              </button>
            </li>
            : null
        }
      </ul>
    </nav>
  )
}

export default Pagination;