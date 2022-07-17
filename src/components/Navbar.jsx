import Worldicon from '../images/Fill213.png'
import BookingIcon from '../images/booking_online-512.jpg'


export default function Navbar() {
    return (
        <nav>
            <a href="https://earth.google.com/web/" title="Explore the World">
                <img src={Worldicon} alt="world-icon" className="world-icon" />
            </a>
            <h4>Future Travel Journal</h4>
            <div>
                <a href="https://www.booking.com/index.html" title="Book your next Travel">
                    <img src={BookingIcon} alt="booking-icon" className='booking-icon' />
                </a>
            </div>
        </nav>
    )
}