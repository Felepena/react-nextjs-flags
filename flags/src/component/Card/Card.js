export default function Card ({data, params}){

    return (
        <div>
            <h1>{data.name.common}</h1>
            <h2>{data.name.official}</h2>
            <h3>{data.region}</h3>
            <h4>{data.subregion}</h4>
        </div>
    )


}