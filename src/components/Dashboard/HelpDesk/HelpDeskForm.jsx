import hdf from "./Css/HelpDeskForm.module.css";

const HelpDeskForm = () => {
  return (
    <div className={hdf.main}>
      <form>
        <div className={hdf.flex}>
          <label htmlFor="fullName">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="john david"
            // value={formData.fullName}
            // onChange={handleChange}
            required
          />
        </div>
        <div className={hdf.flex}>
          <label htmlFor="email">Your Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@yourmail.com"
            // value={formData.email}
            // onChange={handleChange}
            required
          />
        </div>
        <div className={hdf.flex}>
          <label htmlFor="storeName">Store Name *</label>
          <input
            type="text"
            id="storeName"
            name="storeName"
            placeholder="your company name here"
            // value={formData.storeName}
            // onChange={handleChange}
            required
          />
        </div>
        <div className={hdf.flex}>
          <label htmlFor="storeId">Store ID *</label>
          <input
            type="text"
            id="storeId"
            name="storeId"
            placeholder="your store id (located in my profile)"
            // value={formData.storeId}
            // onChange={handleChange}
            required
          />
        </div>
        <div className={hdf.flex}>
          <label htmlFor="subject">Subject *</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="brief title of your query"
            // value={formData.subject}
            // onChange={handleChange}
            required
          />
        </div>
        <div className={hdf.flex}>
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            rows={10}
            placeholder="brief description of the query min 120 characters"
            // value={formData.message}
            // onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default HelpDeskForm;
