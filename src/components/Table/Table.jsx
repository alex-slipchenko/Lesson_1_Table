import React from 'react';
import './style.css';

const Table = ({ cars = [] }) => {
    return cars.length ?
        (
            <table>
                <tbody>
                    {cars.map((car, index) => (
                        <React.Fragment key={index}>
                            <tr className="row__brand">
                                <td colSpan="2">{car.brand}</td>
                            </tr>
                            {car.models.map((model, index) => (
                                model.collection.map((item, index) => (
                                    <tr key={index}>
                                        {index === 0 && (
                                            <td rowSpan={model.collection.length} className="cell__model">
                                                {model.name}
                                            </td>
                                        )}
                                        <td>
                                            <ul>
                                                <li>Version: {item.version}</li>
                                                <li>Year: {item.year}</li>
                                                <li>Horsepower: {item.horsepower}</li>
                                                <li>Engine: {item.engine}</li>
                                            </ul>
                                        </td>
                                    </tr>
                                ))
                            ))}
                        </React.Fragment>
                    ))}
                </tbody>
            </table>
        ) : null;
}

export default Table;