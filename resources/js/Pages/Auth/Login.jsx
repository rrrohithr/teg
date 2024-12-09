import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            <div className="col-12 col-sm-9 col-md-6 col-lg-4 col-xl-4 m-auto">
                {status && (
                    <div className="mb-4 text-sm font-medium text-success">
                        {status}
                    </div>
                )}
                <div className="bg-white p-4 rounded rounded-1">
                    <div className="text-center mb-4">
                        <div className="h3 fw-normal">Login to your account</div>
                        <div>Login to your account using SSO</div>
                    </div>
                    <div>
                        <div className="d-flex justify-content-between align-items-center">
                            <PrimaryButton className="w-100" disabled={processing}>
                                Login using SSO
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
                <div className="mt-3 text-center">
                    Developed by <a href="" className="text-decoration-none">Transport Exchange Group</a>
                </div>
            </div>
        </GuestLayout>
    );
}
