import { Link } from 'react-router-dom';

const productsData = [
  {
    id: 1,
    name: 'car',
    infoCar: 'Audi',
  },
  {
    id: 2,
    name: 'car',
    infoCar: 'BMW',
  },
  {
    id: 3,
    name: 'car',
    infoCar: 'Ford',
  },
];

export const Products = () => {
  return (
    <ul>
      {productsData.map(({ id, infoCar }) => (
        <Link key={id} to={`${id}`}>
          <li>
            <h4>{infoCar}</h4>
          </li>
        </Link>
      ))}
    </ul>
  );
};
