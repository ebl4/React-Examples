import Car from './Car.js';

function Garage() {
    const cars = [
        {id: 1, brand: 'Ford'}, 
        {id: 2, brand: 'Audi'}, 
        {id: 3, brand: 'Ferrari'}
    ];
    return (
        <>
            <h1>Who lives in my Garage?</h1>
            <ul>
                {cars.map((car) => <Car key={car.id} brand={car.brand}/>)}
            </ul>
        </>
    );
}

export default Garage;