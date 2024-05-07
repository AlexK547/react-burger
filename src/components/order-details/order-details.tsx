import { createPortal } from "react-dom";
import styles from "./order-details.module.css";
import { useEffect } from "react";
import imageDone from "../../images/png/done.png";

const orderRoot = document.getElementById("react-orders");

type OrderDetailsProps = {
  isOpen: boolean;
  setOpen: Function;
};

export default function OrderDetails({ isOpen, setOpen }: OrderDetailsProps) {
  useEffect(() => {
    const pressESC: EventListenerOrEventListenerObject = (e: any) => {
      if (e.keyCode == 27) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", pressESC);

    return () => document.removeEventListener("keydown", pressESC);
  }, []);

  const handleClick = (e: any) => {
    if (!e.target.closest("[data-id=modal]")) {
      setOpen(false)
    }
  }

  return (
    orderRoot &&
    createPortal(
      isOpen && (
        <>
          <div
            className={styles["order-details"]}
            onClick={handleClick}
          >
            <div className={styles["order-details__card"]} data-id="modal">
              <div className={styles["order-details__head"]}>
                <svg
                  onClick={() => setOpen(false)}
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.292893 0.292893C0.683417 -0.0976311 1.31658 -0.0976311 1.70711 0.292893L9 7.58579L16.2929 0.292893C16.6834 -0.0976311 17.3166 -0.0976311 17.7071 0.292893C18.0976 0.683417 18.0976 1.31658 17.7071 1.70711L10.4142 9L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L9 10.4142L1.70711 17.7071C1.31658 18.0976 0.683417 18.0976 0.292893 17.7071C-0.0976311 17.3166 -0.0976311 16.6834 0.292893 16.2929L7.58579 9L0.292893 1.70711C-0.0976311 1.31658 -0.0976311 0.683417 0.292893 0.292893Z"
                    fill="#F2F2F3"
                  />
                </svg>
              </div>

              <div className={styles["order-details__number"]}>034536</div>
              <p className={styles["order-details__id-order"]}>
                идентификатор заказа
              </p>
              <img src={imageDone} alt="img" />
              <p className={styles["order-details__status"]}>
                Ваш заказ начали готовить
              </p>
              <p className={styles["order-details__message"]}>
                Дождитесь готовности на орбитальной станции
              </p>
            </div>
          </div>
        </>
      ),
      orderRoot
    )
  );
}
