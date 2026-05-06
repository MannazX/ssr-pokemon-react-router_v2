import React, { useState } from "react";
import { useNavigate } from "react-router";

function SearchOptions() {
    const [mode, setMode] = useState<"name" | "type">("name");
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (!input.trim()) {
            return;
        }

        if (mode === "name") {
            navigate(`/searchName?q=${encodeURIComponent(input.trim())}`);
        } else {
            navigate(`/searchType?t=${encodeURIComponent(input.trim())}`);
        }
    };

    return (
        <div className="card p-3 mb-3">
            <h5>Search Pokemon</h5>
            <div className="mb-2">
                <label className="me-2">Search by:</label>
                <select className="form-select d-inline-block w-auto" value={mode} onChange={(e) => setMode(e.target.value as "name" | "type")}>
                    <option value="name">Name</option>
                    <option value="type">Type</option>
                </select>
            </div>

            <form onSubmit={handleSubmit} className="d-flex">
                <input className="form-control me-2" type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
        </div>
    )        
}

export default SearchOptions;