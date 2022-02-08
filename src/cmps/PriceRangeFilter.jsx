import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const options = [
    { value: 20, label: '$5' },
    { value: 21, label: '$10' },
    { value: 22, label: '$20' },
    { value: 23, label: '$30' },
    { value: 24, label: '$40' },
    { value: 25, label: '$50' },
    { value: 26, label: '$75' },
    { value: 27, label: '$100' },
    { value: 32, label: '$100+' }
]
const defaultOption = "Budget";
export function PriceRangeFilter() {

    const handleChange = (event) => {
        console.log(event)

        // const newStayTypes = { ...stayType, [event.target.name]: event.target.checked };
        // sortByType(stays, filterBy, newStayTypes, stayPrice, searchParams);
    };

    return (
        <div>
            <Dropdown
                className="price-filter"
                options={options}
                onChange={handleChange}
                value={defaultOption}
                placeholder="Budget" />

        </div>
    )
}