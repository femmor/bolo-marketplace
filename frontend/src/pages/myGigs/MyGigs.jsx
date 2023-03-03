import { Link } from 'react-router-dom';

import './MyGigs.scss';

const MyGigs = () => {
  return (
    <div className="my-gigs">
      <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          <Link to="/add">
            <button>Add New Gig</button>
          </Link>
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="gig"
                  className="gig-img"
                />
              </td>
              <td>Logo Design</td>
              <td>$10</td>
              <td>12</td>
              <td>
                <img className="delete-img" src="/images/delete.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="gig"
                  className="gig-img"
                />
              </td>
              <td>Logo Design</td>
              <td>$10</td>
              <td>12</td>
              <td>
                <img className="delete-img" src="/images/delete.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="gig"
                  className="gig-img"
                />
              </td>
              <td>Logo Design</td>
              <td>$10</td>
              <td>12</td>
              <td>
                <img className="delete-img" src="/images/delete.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="gig"
                  className="gig-img"
                />
              </td>
              <td>Logo Design</td>
              <td>$10</td>
              <td>12</td>
              <td>
                <img className="delete-img" src="/images/delete.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="gig"
                  className="gig-img"
                />
              </td>
              <td>Logo Design</td>
              <td>$10</td>
              <td>12</td>
              <td>
                <img className="delete-img" src="/images/delete.png" alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default MyGigs;
