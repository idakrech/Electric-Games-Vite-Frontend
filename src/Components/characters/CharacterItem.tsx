import { FC } from "react"
import ICharacter from "../../Interfaces/ICharacter"

const CharacterItem: FC<ICharacter> = ({ id, name, game, image }) => {
  return (
    <div className="card border-0 bg-transparent">
      <img
        className="card-img-top"
        src={`https://localhost:7265/images/${image}`}
        style={{
          width: "100%",
          height: "200px",
          display: "block",
          objectFit: "cover",
        }}
        alt={name}
      />
      <div className="card-body">
        <h6 className="card-title text-white text-center fw-bold mb-3">
          {name!}
        </h6>
        <div
          className="card-text text-white border border-1 border-success p-2 pt-3"
          style={{ fontSize: "0.8rem" }}
        >
          <p>
            <b>Id: </b>
            {id!}
          </p>
          <p>
            <b>From: </b>
            {game!}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
