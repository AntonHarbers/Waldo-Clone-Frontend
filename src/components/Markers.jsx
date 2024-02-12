import PropTypes from 'prop-types';

Markers.propTypes = {
  markers: PropTypes.array,
};

export default function Markers({ markers }) {
  return markers.map((marker) => (
    <div
      key={marker[0] + marker[1]}
      style={{
        position: 'absolute',
        left: `${marker[0]}%`,
        top: `${marker[1]}%`,
      }}
      className=" bg-green-500 h-5 w-5"
    ></div>
  ));
}
