import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="d-flex flex-column min-vh-100 align-items-center bg-light pt-5">
           {children}
        </div>
    );
}
