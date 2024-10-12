/* eslint-disable react/prop-types */
export default function Button({ text, style, onSmash }) {
  return (
    <button onClick={onSmash} className={style}>
      {text}
    </button>
  );
}
