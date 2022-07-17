import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from './components/Footer'
import data from './data'

export default function App() {
    const cardElements = data.map(item => {
        return <Card
            key={item.id}
            title={item.title}
            location={item.location}
            googleMapsUrl={item.googleMapsUrl}
            startDate={item.startDate}
            endDate={item.endDate}
            description={item.description}
            imageUrl={item.imageUrl}
        />
    })
    return <div>
        <Navbar />
        <>
            {cardElements}
        </>
        <Footer />
    </div>
}