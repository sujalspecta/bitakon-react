import Link from 'next/link';

const Pagination = ({ url }) => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href={`/${url}`}>
              
                <i className="fa-light fa-arrow-left"></i>
              
            </Link>
          </li>
          <li>
            <Link href={`/${url}`}>
              1
            </Link>
          </li>
          <li>
            <span className="current">2</span>
          </li>
          <li>
            <Link href={`/${url}`}>
              3
            </Link>
          </li>
          <li>
            <Link href={`/${url}`}>
              
                <i className="fa-light fa-arrow-right"></i>
              
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;