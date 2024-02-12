import PropTypes from 'prop-types';

CharacterSelect.propTypes = {
  characterInfo: PropTypes.array,
  HandleCharacterSelection: PropTypes.func,
  selectedCoords: PropTypes.array,
};

export default function CharacterSelect({
  characterInfo,
  HandleCharacterSelection,
  selectedCoords,
}) {
  return (
    <div
      style={{
        position: 'absolute',
        left: `calc(${selectedCoords[0]}% - 2%)`,
        top: `calc(${selectedCoords[1]}% - 2%)`,
      }}
    >
      <div className=" select-none relative h-[50px] w-[50px] border-4 border-red-500">
        <div className=" absolute flex flex-col w-auto h-[128px] gap-y-[2px] justify-center left-[48px] top-[-42px]">
          {characterInfo.map((character) => (
            <div
              key={character._id}
              onClick={() => HandleCharacterSelection(character._id)}
              className=" w-28 h-[30px] bg-slate-200 flex items-center justify-around cursor-pointer"
            >
              <img
                src={character.imgUrl}
                alt={`${character.name} Pic`}
                className="w-[24px] h-[24px]"
              />
              <h1>{character.name}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
