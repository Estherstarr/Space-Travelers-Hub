import './rocket.css';
import PropTypes from 'prop-types';

function Rocket({
  name, description, flickrImages, reservedRocket, reserved,
}) {
  return (
    <div className="rocketContainer">
      <img src={flickrImages} alt="rocket" className="imgContainer" />
      <div className="displayInfo">
        <h1 className="headerText">{name}</h1>
        <p className="descriptionTxt">{description}</p>
        {!reserved && (
          <button
            type="button"
            className="buttonStyle"
            onClick={reservedRocket}
          >
            Reserve Rocket
          </button>
        )}
        {reserved && (
          <button
            type="button"
            className="buttonStyle"
            onClick={reservedRocket}
          >
            Cancel Reservation
          </button>
        )}
      </div>
    </div>
  );
}

Rocket.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  flickrImages: PropTypes.string,
  reserved: PropTypes.bool,
  reservedRocket: PropTypes.func.isRequired,
};

Rocket.defaultProps = {
  name: '',
  description: '',
  flickrImages: '',
  reserved: '',
};
export default Rocket;
