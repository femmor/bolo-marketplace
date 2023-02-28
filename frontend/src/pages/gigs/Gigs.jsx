import { useState } from 'react';
import GigCard from '../../components/gig-card/GigCard';
import { gigs } from '../../data';
import './Gigs.scss';

const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState('sales');

  const handleSortType = type => {
    setSort(type);
    setOpen(false);
  };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">BOLO &gt; GRAPHIC & DESIGN &gt; </span>
        <h1>AI Artists</h1>
        <p>
          Explore the boundaries of art and technology with Bolo&apos;s AI
          artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input type="number" placeholder="min" />
            <input type="number" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sort-by">Sort by:</span>
            <span className="sort-type">
              {sort === 'sales' ? 'Best Selling' : 'Newest'}
            </span>
            <img
              src="./images/down.png"
              alt="down caret"
              onClick={() => setOpen(!open)}
            />
            {open && (
              <div className="right-menu">
                {sort === 'sales' ? (
                  <span onClick={() => handleSortType('createdAt')}>
                    Newest
                  </span>
                ) : (
                  <span onClick={() => handleSortType('sales')}>
                    Best Selling
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="gigs-container">
          {gigs.map(gig => (
            <GigCard key={gig.id} gig={gig} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Gigs;
