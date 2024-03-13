import { useEffect, useState } from "react";

const Pagination = () => {
    const [cities, setCities] = useState([]);
    const [page, setPage] = useState(1);
    useEffect(() => {
        (async () => {
            //TODO change api limit or pages limit as per requirment 
              const response = await fetch(`https://wft-geo-db.p.rapidapi.com/v1/geo/cities?limit=5`);
            setCities(response?.cities);
        })();
    }, []);
    const handleChange = (pageNumber) => {
        setPage(pageNumber);
    };
    return (
        <>
            <div>
            </div>
            {/* pagination buttons */}
            <div className="pagination">
                <span
                    onClick={() => handleChange(page - 1)}
                    className={page <= 1 ? "pageDisable" : ""}
                >
                    ⏮️
                </span>
                {[...Array(cities.length / 10)].map((_, idx) => (
                    <span
                        onClick={() => handleChange(idx + 1)}
                        className={`${page === idx + 1 ? "active" : ""}`}
                    >
                        {idx + 1}
                    </span>
                ))}
                <span onClick={() => handleChange(page + 1)} aria-disabled={true}>
                    ⏭️
                </span>
            </div>
        </>
    );
};

export default Pagination;
