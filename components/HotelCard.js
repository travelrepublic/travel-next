import Link from 'next/link';
import StarRating from '../components/StarRating';

function hotelImageUrl(hotel) {
    return `https://hi-cdn.t-rp.co.uk/images/hotels/${hotel.Id}/0?width=200&height=200&crop=true`;
}

function formatCurrency(num) {
    return num.toLocaleString('en-gb', {style: 'currency', currency: 'GBP'});
}

const HotelCard = ({hotel}) => (
    <div className='hotel-card'>
        <div className='card-border'>
            <div className='left'>
                <img src={hotelImageUrl(hotel)} />
            </div>
            <div className="right">
                <h3>{hotel.Title}</h3>
                <StarRating stars={hotel.StarRating}/>
                <p>{hotel.Summary.substring(0, 500)}</p>
                <p className="price">from {formatCurrency(hotel.IndicativeMinPrice)}</p>
                <Link prefetch href={`${hotel.Url}`}>
                    <a href="" className="select">Select</a>
                </Link>
            </div>
        </div>

        <style jsx>{`
            .hotel-card {
                padding: 10px;
                width:50%;
                float: left;
                position: relative;
            }
            .card-border {
                border: 1px solid #ccc;
                padding: 10px;
                min-height: 300px;
            }

            .price {
                font-weight: bold;
                font-size:20px;
                color:red;
            }

            .left {
                float: left;
                width: 50%;
            }

            .right {
                float: left;
                width: 50%;
            }

            .select {
                color: #fff;
                background: red;
                padding: 10px;
                font-size: 20px;
                margin: 10px 0 10px 0;
                width:100%;
                display: block;
                text-align: center;
                text-decoration: none;
            }
        `}</style>
    </div>
)

export default HotelCard;
