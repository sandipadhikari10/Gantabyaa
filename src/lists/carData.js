// carData.js
import scorpio from '../assets/cars/scorpio.png';
import santro from '../assets/cars/santro.png';
import bolero from '../assets/cars/bolero.png';
import hice from '../assets/cars/bolero.png';
import ns200 from '../assets/cars/bolero.png';
import hilux from '../assets/cars/bolero.png';


const carData = [
  {
  id: 101,
    name: 'Toyota Corolla',
    image: scorpio,
    price: 5000,
    details: {
      engine: '1500 cc',
      seats: 5,
      fuelType: 'Diesel',
      transmission: 'Manual',
      mileage: '18 km/l',
      insurance: 'Fully insured',
    },


  },
  {
    id: 102,
    name: 'Honda City',
    image: santro,
    price: 4000,
    details: {
      engine: '1500 cc',
      fuelType: 'Diesel',
      seats: 5,
      transmission: 'Manual',
      mileage: '18 km/l',
      insurance: 'Fully insured',
    },
  },
  {
    id: 103,
    name: 'Hyundai Creta',
    image: bolero,
    price: 6000,
    details: {
      engine: '1600 cc',
      fuelType: 'Petrol',
      seats: 5,
      transmission: 'Automatic',
      mileage: '14 km/l',
      insurance: 'Fully insured',
    },
  },
  {
    id: 104,
    name: 'Hyundai Creta',
    image: hice,
    price: 6000,
    details: {
      engine: '1600 cc',
      fuelType: 'Petrol',
      seats: 5,
      transmission: 'Automatic',
      mileage: '14 km/l',
      insurance: 'Fully insured',
    },
  },
  {
    id: 105,
    name: 'Hyundai Creta',
    image: hilux,
    price: 6000,
    details: {
      engine: '1600 cc',
      fuelType: 'Petrol',
      seats: 5,
      transmission: 'Automatic',
      mileage: '14 km/l',
      insurance: 'Fully insured',
    },
  },
  {
    id: 106,
    name: 'Hyundai Creta',
    image: ns200,
    price: 6000,
    details: {
      engine: '1600 cc',
      fuelType: 'Petrol',
      seats: 5,
      transmission: 'Automatic',
      mileage: '14 km/l',
      insurance: 'Fully insured',
    },
  }
];

export default carData;
