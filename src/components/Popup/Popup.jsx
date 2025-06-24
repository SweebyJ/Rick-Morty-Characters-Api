import styles from "./Popup.module.css";

export function Popup({ selectedCard, closePopup }) {
  return (
    <div className={styles.popup_container} onClick={() => closePopup()}>
      <div
        className={styles.popup_content}
        onClick={(event) => event.stopPropagation()}
      >
        <img src={selectedCard?.image} alt="image" />
        <p>Name: {selectedCard?.name}</p>
        <p>Status: {selectedCard?.status}</p>
        <p>Species: {selectedCard?.species}</p>
        <p>Gender: {selectedCard?.gender}</p>
        <p>Location: {selectedCard?.location.name}</p>
      </div>
    </div>
  );
}