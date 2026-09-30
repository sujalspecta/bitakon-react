import Link from 'next/link';

const Pagination = () => {
  return (
    <>
      <div className="col-xxl-12">
        <div className="basic-pagination mt-20">
          <nav>
            <ul>
              <li>
                <Link href={'/blog'}>
                  
                    <i className="fa-light fa-arrow-left"></i>
                  
                </Link>
              </li>
              <li>
                <Link href={'/blog'}>
                  1
                </Link>
              </li>
              <li>
                <span className="current">2</span>
              </li>
              <li>
                <Link href={'/blog'}>
                  3
                </Link>
              </li>
              <li>
                <Link href={'/blog'}>
                  
                    <i className="fa-light fa-arrow-right"></i>
                  
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Pagination;