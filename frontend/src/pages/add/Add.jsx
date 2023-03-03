import './Add.scss';

const Add = () => {
  return (
    <div className="add">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              placeholder="e.g I will do something I'm really good at"
            />
            <label htmlFor="title">Category</label>
            <select name="cats" id="cats">
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>
            <label htmlFor="cover-image">Cover Image</label>
            <input type="file" />
            <label htmlFor="upload-images">Upload Images</label>
            <input type="file" multiple />
            <label htmlFor="description">Description</label>
            <textarea
              placeholder="Introduce yourself and your gig here..."
              rows={10}
              cols={30}
            ></textarea>
            <button>Create</button>
          </div>
          <div className="right">
            <label htmlFor="service-title">Service Title</label>
            <input type="text" placeholder="e.g One page web design" />
            <label htmlFor="short-description">Short Description</label>
            <textarea
              placeholder="Describe your service here..."
              rows={10}
              cols={20}
            ></textarea>
            <label htmlFor="short-description">
              Delivery Time (e.g 3 days)
            </label>
            <input type="number" placeholder="e.g 3 days" min={1} />
            <label htmlFor="revisions"> Number of Revisions</label>
            <input type="number" placeholder="e.g 3 revisions" min={1} />

            <label htmlFor="features">Add Features</label>
            <input type="text" placeholder="e.g Page design" />
            <input type="text" placeholder="e.g File uploading" />
            <input type="text" placeholder="e.g Setting up a domain" />
            <input type="text" placeholder="e.g Hosting" />

            <label htmlFor="features">Price</label>
            <input type="text" placeholder="Enter price" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Add;
