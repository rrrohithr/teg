import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="d-flex flex-column min-vh-100 align-items-center bg-light pt-5">
            <div>
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20" />
                </Link>
            </div>

            <div className="mt-4 w-100 bg-white p-4 shadow-sm rounded-3">
                {children}
            </div>
        </div>
    );
}
