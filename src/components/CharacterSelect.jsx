/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
export default function CharacterSelect({
  characterInfo,
  HandleCharacterSelection,
}) {
  return (
    <div className="relative h-[50px] w-[50px] border-4 border-red-500">
      <div className=" absolute flex flex-col w-auto h-[128px] gap-y-[2px] justify-center left-[48px] top-[-42px]">
        {characterInfo.map((character) => (
          <div
            key={character._id}
            onClick={() => HandleCharacterSelection(character._id)}
            className=" w-28 h-[30px] bg-slate-200 flex items-center justify-around cursor-pointer"
          >
            <img
              src={character.img}
              alt={`${character.name} Pic`}
              className="w-[24px] h-[24px]"
            />
            <h1>{character.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
