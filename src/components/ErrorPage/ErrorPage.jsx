import { useRouteError } from "react-router-dom";
import './ErrorPage.css'
export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="error-page">
            <h1>Ooops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p className="error-msg">
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}