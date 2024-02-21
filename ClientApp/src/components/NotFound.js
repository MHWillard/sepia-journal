import React from 'react';
import DocumentTitle from "./DocumentTitle.js"

export default function NotFound() {
    DocumentTitle("Sepia Journal - Page Not Found")

        return (
            <div>
                <p>We're sorry, we were unable to find or access that page. Were you trying to log in? Click here to log into your account.</p>
            </div>
        );
}