import loc from '../images/Fill219.png'

export default function Card(props) {
    return (
        <div>
            <section>
                <div>
                    <img src={props.imageUrl} alt={props.title} className='city-photo' />
                </div>
                <article>
                    <div className='country'>
                        <img src={loc} alt="location-symbol" />
                        <h2>{props.location}</h2>
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1>{props.title}</h1>
                    <h3><span>{props.startDate} -</span><span> {props.endDate}</span></h3>
                    <p>{props.description}</p>

                </article>

            </section>
            <hr></hr>
        </div>
    )
}