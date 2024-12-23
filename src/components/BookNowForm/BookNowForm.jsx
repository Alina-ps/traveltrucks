import { useDispatch, useSelector } from 'react-redux';
import s from './BookNowForm.module.css';
import { selectDate } from '../../redux/date/selectors.js';
import { useRef } from 'react';
import { setSelectedDate } from '../../redux/date/slice.js';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { selectIsLoading } from '../../redux/campers/selectors.js';
import Loader from '../Loader/Loader.jsx';
import toast, { Toaster } from 'react-hot-toast';

const BookNowForm = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(selectDate);
  const isLoading = useSelector(selectIsLoading);

  const parsedDate = selectedDate ? new Date(selectedDate) : null;

  const formRef = useRef(null);
  const datePickerRef = useRef(null);

  const handleDateChange = (date) => {
    dispatch(setSelectedDate(date.getTime()));
  };

  const handleInputClick = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    formRef.current.reset();
    dispatch(setSelectedDate(null));
    toast.success('Booked successfully!');
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className={s.container}>
      <Toaster position="top-right" />
      <form className={s.form} ref={formRef} onSubmit={handleFormSubmit}>
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
          <div className={`${s.input} ${s.datePickerWrapper}`}>
            <input
              type="text"
              placeholder="Booking Date*"
              className={s.date}
              value={parsedDate ? parsedDate.toLocaleDateString() : ''}
              onClick={handleInputClick}
              readOnly
            />
            <DatePicker
              selected={parsedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              className={s.visuallyHidden}
              ref={datePickerRef}
              required
            />
          </div>

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
