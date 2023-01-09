import React from "react";
import FilterBar from "../FilterBar";
import CountriesList from "../CountriesList";

const Home: React.FunctionComponent = () => {
    return (
        <main>
            <FilterBar/>
            <CountriesList/>
        </main>
    )
}
export default Home