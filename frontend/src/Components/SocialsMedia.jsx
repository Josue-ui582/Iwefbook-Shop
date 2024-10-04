import React from "react";
import { Link } from "react-router-dom";

const SocialsMedia = () => {
    return(
        <div className="flex gap-4 px-8">
            <Link to="https://www.facebook.com/Iwefebooks?mibextid=LQQJ4d
                " target="blanck">
                    <img src="facebook-icon.png" alt="facebook-icon" width="20" height="20" className="socials"/>
            </Link>
            <Link to="https://www.instagram.com/iwefe_books?igsh=MXF5N2l4bTRhN2ZkeQ%3D%3D&utm_source=qr" target="blanck">
                <img src="instagram icon.png" alt="instagram icon" width="20" height="20" className="socials" />
            </Link>
            <Link to="https://x.com/iwefebooks?s=21&t=Dm8YyS1AaD0uoqFrxogmsQ" target="blanck">
                <img src="x.png" alt="x icon" width="30" height="30" className="socials" />
            </Link>
            <Link to="https://www.tiktok.com/@iwefebooks?_t=8nzIp0FDW58&_r=1" target="blanck">
                <img src="tiktok icon.png" alt="tiktok icon" width="15" height="15" className="socials" />
            </Link>
        </div>
    )
}

export default SocialsMedia