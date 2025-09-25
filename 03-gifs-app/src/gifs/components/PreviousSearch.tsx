
interface PreviousSearchProps {
    searches: string[];
    onLabelClicked: (term: string) => void;
}

export const PreviousSearch = (props: PreviousSearchProps) => {
    return (
        <div className='previous-searches'>
            <h2>Busquedas previas</h2>
            <ul className='previous-searches-list'>
                {
                    props.searches.map(term => (
                        <li key={term}
                            onClick={() => props.onLabelClicked(term)}>
                            {term}
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}
