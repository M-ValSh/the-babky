import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.scene}>
      <div className={css.cube}>
        <div className={(css.cube__face, css.cube__face__top)}> </div>
        <div className={(css.cube__face, css.cube__face__bottom)}> </div>
        <div className={(css.cube__face, css.cube__face__left)}> </div>
        <div className={(css.cube__face, css.cube__face__right)}> </div>
        <div className={(css.cube__face, css.cube__face__front)}> </div>
        <div className={(css.cube__face, css.cube__face__back)}> </div>
      </div>
    </div>
  );
};

export default Loader;
