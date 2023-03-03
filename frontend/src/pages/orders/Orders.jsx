import { Link } from 'react-router-dom';

import './Orders.scss';

const Orders = () => {
  const currentUser = {
    id: 1,
    username: 'John Doe',
    isSeller: true,
  };

  return (
    <div className="orders">
      <div className="container">
        <div className="title">
          <h1>Orders</h1>
        </div>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price</th>
              <th>{currentUser?.isSeller ? 'Buyer' : 'Seller'}</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=12360&h=750&dpr=2"
                  alt="gig"
                  className="gig-img"
                />
              </td>
              <td>Logo Design</td>
              <td>$10</td>
              <td>123</td>
              <td>
                <img className="message-img" src="/images/message.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=12360&h=750&dpr=2"
                  alt="gig"
                  className="gig-img"
                />
              </td>
              <td>Logo Design</td>
              <td>$10</td>
              <td>123</td>
              <td>
                <img className="message-img" src="/images/message.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=12360&h=750&dpr=2"
                  alt="gig"
                  className="gig-img"
                />
              </td>
              <td>Logo Design</td>
              <td>$10</td>
              <td>123</td>
              <td>
                <img className="message-img" src="/images/message.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=12360&h=750&dpr=2"
                  alt="gig"
                  className="gig-img"
                />
              </td>
              <td>Logo Design</td>
              <td>$10</td>
              <td>123</td>
              <td>
                <img className="message-img" src="/images/message.png" alt="" />
              </td>
            </tr>
            <tr>
              <td>
                <img
                  src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=12360&h=750&dpr=2"
                  alt="gig"
                  className="gig-img"
                />
              </td>
              <td>Logo Design</td>
              <td>$10</td>
              <td>123</td>
              <td>
                <img className="message-img" src="/images/message.png" alt="" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default Orders;
