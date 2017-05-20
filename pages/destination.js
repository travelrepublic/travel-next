import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch';

const Destination = props => (
    <Layout>
        <h1>Let's see if we can replicate a destination landing page</h1>
        <p>It will need to support the corrrect route format</p>
        <p>be server side rendered</p>
        <p>and maybe support some basic filtering</p>
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
        movies: data.Search
    }
}

export default Destination;
