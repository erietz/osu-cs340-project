import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <h1>HatchSprint</h1>
            <ul>
                <Link to="/restaurants">Restaurant Stuff</Link>
            </ul>
        </>
    )
}
