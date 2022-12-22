import { Button} from 'react-bootstrap';

function weatherSearch() {
};

const Weather = () => {
    return (
        <div>
            <p>Welcome to Weather</p>
            <Button onClick={weatherSearch()} />
        </div>
    )
};

export default Weather;