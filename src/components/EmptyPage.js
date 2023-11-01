import { useLocation } from "react-router-dom";
import './EmptyPage.scss';

const EmptyPage = () => {

    const location = useLocation();
    let locationName = location.pathname;
    locationName = locationName.substring(1);
    locationName = locationName[0].toUpperCase() + locationName.slice(1);
    if (locationName === 'Orderonline') {
        locationName = 'Order Online';
    }

    return (
        <main className="empty">
            <p className="empty_title">{locationName}</p>
            <p className="empty_text">This is the <span className="empty_text-strong">{locationName}</span> page, which is not part of this project.</p>
        </main>
    )
}

export default EmptyPage;