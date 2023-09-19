interface Content {
    title: string
    text: string
    img?: string
}

export default function CardContent(props: Content) {
  return (
    <>
        {props.img  && <img src={props.img} className="card-img-top" alt="..."/>}
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <button className="btn btn-primary">Go somewhere</button>
        </div>
    </>
  )
}
