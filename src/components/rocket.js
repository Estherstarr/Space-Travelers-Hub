import './rocket.css';
import PropTypes from 'prop-types';

function Rocket({ name, description, flickrImages }) {
  return (
    <div className="rocketContainer">
      <img src={flickrImages} alt="rocket" className="imgContainer" />
      <div className="displayInfo">
        <h1 className="headerText">{name}</h1>
        <p className="descriptionTxt">
          {description}
        </p>
        <button type="button" className="buttonStyle">
          Reserve Rocket
        </button>
      </div>
    </div>
  );
}

Rocket.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  flickrImages: PropTypes.string,
};

Rocket.defaultProps = {
  name: '',
  description: '',
  flickrImages: '',
};
export default Rocket;
