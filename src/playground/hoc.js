// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract  state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);
const InfoAuth = (props) => (
    <div>
        <h1>Secret Stuff</h1>
        <p>This is really secret stuff!: {props.info}</p>
    </div>
);

// isAdmin ist entweder true oder false. Wird geprüft und entsprechend wird die zeile angezeigt oder nicht
const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p> }
            <WrappedComponent { ...props }/>
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    // Hier kommt einmal mehr der ternary operator zum Einsatz! Beispiel:
    // Aussage ? (dies passiert wenn wahr) : (dies passiert wenn falsch)
    return (props) => (
        <div>
            {
                props.isAuthenticated ? (
                    <WrappedComponent { ...props } />
                ) : (
                    <p>Please login to view information</p>
                )
            }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentication(InfoAuth);

// ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info="These are the secret details" />, document.getElementById('app'));
