import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.scene}>
      <div className={css.cube}>
        <div className={[css.cube__face, css.cube__face__top].join(' ')}> </div>
        <div
          className={[css.cube__face, css.cube__face__bottom].join(' ')}
        ></div>
        <div className={[css.cube__face, css.cube__face__left].join(' ')}></div>
        <div
          className={[css.cube__face, css.cube__face__right].join(' ')}
        ></div>
        <div
          className={[css.cube__face, css.cube__face__front].join(' ')}
        ></div>
        <div className={[css.cube__face, css.cube__face__back].join(' ')}></div>
      </div>
    </div>
  );
};

export default Loader;
