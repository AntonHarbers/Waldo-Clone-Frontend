import PropTypes from 'prop-types';

Characters.propTypes = {
  charData: PropTypes.array,
};

export default function Characters({ charData }) {
  return (
    <div className="absolute left-0 bottom-0 flex-col gap-2 p-2">
      <h1>Find These Characters</h1>
      <div className="flex gap-2 p-2">
        {' '}
        {charData.map((char) => (
          <div key={char._id}>
            <img className="w-10 h-10" src={char.imgUrl} alt="charImage" />
            <h1>{char.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
