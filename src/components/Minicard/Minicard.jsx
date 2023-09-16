export function Category({ name, imgUrl }) {
  return (
    <div className="category">
      <img
        src={imgUrl}
        alt={`category-image-${name}`}
        className="category__image"
      />
      <span className="category__name">Accommodations</span>
    </div>
  );
}
