import React from 'react';
import { data } from '../data';

const Table = ({filteredData}) => {
    return (
        <table className='styled-table'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Place</th>
                    <th>Country </th>
                </tr>
            </thead>
            {
                // As API is not working so instead of filteredData 
                // I have passed static array
                
                // filteredData?.map((res,index) => (
                //     <tr>
                //             <td>No result found</td>
                //         </tr>
                //     ) : (
                //         <>
                //             <tbody>
                //                 <tr key={index}>
                //                     <td>{res?.number}</td>
                //                     <td>{res?.place}</td>
                //                     <td>{res?.country}</td>
                //                 </tr>
                //             </tbody>
                //         </>
                //     )
                // ))

                data?.map((res,index) => (
                    res?.length === 0 ? (
                        <tr>
                            <td>No result found</td>
                        </tr>
                    ) : (
                        <>
                            <tbody>
                                <tr key={index}>
                                    <td>{res?.number}</td>
                                    <td>{res?.place}</td>
                                    <td>{res?.country}</td>
                                </tr>
                            </tbody>
                        </>
                    )
                ))
            }
        </table>
    );
};

export default Table;
