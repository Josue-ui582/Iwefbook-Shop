import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiTiktokFill } from "react-icons/ri";

const SocialsMedia = () => {
    return(
        <div className="flex gap-4 px-8 mt-4">
            <Link to="https://www.facebook.com/Iwefebooks?mibextid=LQQJ4d
                " target="blanck" className="text-white">
                    <FaFacebookF />
            </Link>
            <Link to="https://www.instagram.com/iwefe_books?igsh=MXF5N2l4bTRhN2ZkeQ%3D%3D&utm_source=qr" target="blanck" className="text-white">
                    <FaInstagram />
            </Link>
            <Link to="https://x.com/iwefebooks?s=21&t=Dm8YyS1AaD0uoqFrxogmsQ" target="blanck" className="text-white">
                    <FaXTwitter />
            </Link>
            <Link to="https://www.tiktok.com/@iwefebooks?_t=8nzIp0FDW58&_r=1" target="blanck" className="text-white">
                    <RiTiktokFill />
            </Link>
        </div>
    )
}

export default SocialsMedia