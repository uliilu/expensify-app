import React from 'react';
import {Link} from 'react-router-dom';

// Link wird verwendet, um client side routing durchzuführen. So können Seiten geladen werden, ohne
// das der Server kontaktiert wird und liefern muss.
const NotFoundPage = () => (
    <div>
        404! - <Link to="/">Go home!</Link>
    </div>
);

export default NotFoundPage;