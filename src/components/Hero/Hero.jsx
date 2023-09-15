import "./Hero.css";
const Hero = ({ children, title, alignTitle }) => {
  return (
    <section className="hero">
      {alignTitle == "right" && children}
      <h1>{title}</h1>
      {alignTitle == "left" && children}
    </section>
  );
};
export default Hero;
