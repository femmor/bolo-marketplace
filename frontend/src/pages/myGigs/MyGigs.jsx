import { Link } from 'react-router-dom';

import './MyGigs.scss';

const MyGigs = () => {
  return (
    <div className="my-gigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">Add New Gig</Link>
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Orders</th>
            <th>Action</th>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default MyGigs;
