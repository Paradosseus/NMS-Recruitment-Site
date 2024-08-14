import Logo from "../assets/img/Logo.png"

export const Footer = () => {
    return (
        <footer className="footer  text-base-content py-10 bg-[#ffffff] px-[150px]">
            <aside>
                <img src={Logo} alt="" className="max-w-64"/>
                <p>
                <strong>New Media Services Philippines  </strong>, we fearlessly pursue greatness.<br/>We value the input of every team member, allowing them to shape<br/>our business and deliver top-notch quality work and services for you
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Quick Links</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Browse Jobs</a>
                <a className="link link-hover">Account</a>  

            </nav>
            <nav>
                <h6 className="footer-title">Support</h6>
                <a className="link link-hover">Contact us</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    )
}