import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';
import HotelCard from '../components/HotelCard';

const Destination = props => (
    <Layout>
        <h1>Hotels in Tenerife</h1>
        <p>Rendered on the server!</p>
        {props.hotels.map(hotel => (
            <HotelCard hotel={hotel} key={hotel.Id} />
        ))}
    </Layout>
)

Destination.getInitialProps = async () => {
    const request = {
        'CultureCode':'en-gb',
        'DomainId':1,
        'CurrencyCode':'GBP',
        'Paging':{'Index':0,
        'Size':8},
        'IncludeAggregates':true,
        'AvailabilitySearchId':null,
        'FilterCriteria':{'AirportCode':null,
        'Stars':[],
        'PropertyTypes':[],
        'BoardTypes':[],
        'FacilityCodes':[],
        'PriceRange':null,
        'RatingRange':null,
        'EstabGroupIds':[],
        'EstabGroupName':null,
        'FilterByEstabGroup':false,
        'ChildDestinations':[],
        'OnlyShowAvailable':true},
        'SortCriterion':1,
        'DestinationType':3,
        'DestinationId':54875,
        'FieldFlags':2101455,
        'DiscountCode':null
    };
    const res = await fetch('https://www.travelrepublic.co.uk/api/hotels/static/gethotelsbydestination?fieldsX=Hotels.MinCost,Hotels.OriginalCost', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method : 'POST',
        body: JSON.stringify(request)
    })
    const data = await res.json()
    console.log('Data: ' + JSON.stringify(data));

    console.log(`Hotel data fetched. Count ${data.Hotels.length}`)

    return {
        hotels: data.Hotels
    }
}

export default Destination;
