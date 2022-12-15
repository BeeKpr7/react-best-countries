import React from 'react'

export interface CountryPropsInterface {
    country : {
        fifa: string
    }
}
const CountryCard: React.FunctionComponent<CountryPropsInterface> = ({country}) => {

    return (
        <div>
            {country.fifa}
        </div>
    )
}
export default CountryCard 