import Car from './Car.js';

function Garage() {
    const cars = ['Ford', 'Audi', 'Ferrari'];
    return (
        <>
            <h1>Who lives in my Garage?</h1>
            <ul>
                {cars.map((car) => <Car brand={car}/>)}
            </ul>
        </>
    );
}

export default Garage;