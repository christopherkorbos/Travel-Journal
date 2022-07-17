import Linkedin from '../images/linkedin.svg'
import Github from '../images/github.png'


export default function Footer() {
    return (
        <div className="footer">
            <p>Created for the <a href='https://reactjs.org/'>React </a>course by Christopher Korbos ©</p>
            <div>
                <a href="https://www.linkedin.com/in/christopher-korbos-27808b194/"><img src={Linkedin} alt="linkedin-icon" className='linkedin' /></a>
                <a href="https://github.com/christopherkorbos/"><img src={Github} alt="github-icon" className='github' /></a>
            </div>
        </div>
    )
}