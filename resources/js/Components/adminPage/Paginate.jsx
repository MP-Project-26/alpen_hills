import { Link } from "@inertiajs/react";
import React from "react";

const Paginate = ({ meta }) => {
    const previous = meta.links[0].url;
    const next = meta.links[meta.links.length - 1].url;
    const current = meta.current_page;

    return (
        <div className="join shadow-lg">
            {previous ? (
                <Link href={previous} className="join-item btn btn-md bg-white">
                    «
                </Link>
            ) : (
                <button disabled className="join-item btn btn-md bg-white">
                    «
                </button>
            )}
            <button className="join-item btn btn-md bg-white">{current}</button>
            {next ? (
                <Link href={next} className="join-item btn btn-md bg-white">
                    »
                </Link>
            ) : (
                <button disabled className="join-item btn btn-md bg-white">
                    »
                </button>
            )}
        </div>
    );
};

export default Paginate;
