

const Character = ({ data }) => {
    return (
        <article>
        <div className="rick">
            <img src={data.image} />
        </div>
        <div className="data">
            <h2>{data.name}</h2>
            <h2><span>Especie:</span> {data.species}</h2>
            <h2><span>Estado:</span> {data.status}</h2>
            </div>
        </article>
    )
}

export default Character