import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ options }) => {

  const getTotal = () => Object.values(options).reduce((acc, number) => acc += number, 0)

  const getPosFeed = () => {
    const countGood = options.good;
    if (getTotal() !== 0) {
      // console.log('jyj: ', Math.round((countGood / getTotal()) * 100));
      return Math.round((countGood / getTotal()) * 100);
    }
  }
  getPosFeed();

  return (
    <div>
      <h2>Statistics</h2>

      <ul className={css.list}>
        {/* {options.map(option => (
          <li key={option} className={css[option]} onClick={onLeaveFeedback}>
            {option}
          </li>
        ))} */}
        <li className={css.text}>Good: { options.good}</li>
        <li className={css.text}>Neutral: {options.neutral}</li>
        <li className={css.text}>Bad: { options.bad}</li>
        <li className={css.text}>Total: { getTotal()}</li>
        <li className={css.text}>Positive feedback: { getPosFeed()}%</li>
      </ul>
    </div>
  );
};
