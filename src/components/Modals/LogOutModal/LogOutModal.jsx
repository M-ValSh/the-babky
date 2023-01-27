import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeModalWindow } from "redux/global/global-slice";


const LogOutModal = () => {
  const dispatch = useDispatch()

  const onBackdropClick = (e) => {
    if (e.currentTarget !== e.target) return;
    dispatch(closeModalWindow());
  };

  useEffect(() => {
    const hideModal = e => {
      if (e.code === 'Escape') dispatch(closeModalWindow());
    }

    document.addEventListener("keydown", hideModal);

    return () => {
      document.removeEventListener("keydown", hideModal);
    };
  }, []);
    

  return (
    <div onClick={() => onBackdropClick(e)} className={styles.overlay}>
        <div className={styles.modal}>
            <p>Are you sure, you want to Log Out?</p>
            <button type="button" onClick={() => dispatch(closeModalWindow())}>Keep In</button>
            <button type="button" >Log Out</button>
        </div>
    </div>
  );
};

export default LogOutModal;
