import s from './BookNowForm.module.css';

const BookNowForm = () => {
  return (
    <div className={s.container}>
      <form className={s.form}>
        <div className={s.textWrapper}>
          <h3 className={s.formTitle}>Book your campervan now</h3>
          <p className={s.formText}>
            Stay connected! We are always ready to help you.
          </p>
        </div>

        <div className={s.inputWrapper}>
          <label className={s.visuallyHidden} htmlFor="name">
            Name
          </label>
          <input
            className={s.input}
            type="text"
            name="name"
            id="name"
            placeholder="Name*"
            required
          />

          <label className={s.visuallyHidden} htmlFor="email">
            Email
          </label>
          <input
            className={s.input}
            type="text"
            name="email"
            id="email"
            placeholder="Email*"
            required
          />

          <label className={s.visuallyHidden} htmlFor="booking-date">
            Booking Date
          </label>
          <input
            className={s.input}
            type="text"
            name="booking-date"
            id="booking-date"
            placeholder="Booking date*"
            required
          />

          <label className={s.visuallyHidden} htmlFor="comment">
            Comment
          </label>
          <textarea
            className={s.textarea}
            name="comment"
            id="comment"
            placeholder="Comment"
          ></textarea>
        </div>
        <button className={s.btn}>Send</button>
      </form>
    </div>
  );
};

export default BookNowForm;
