import { useRouter } from 'next/router';

const PageLoadingIndicator = () => {
    const router = useRouter();

    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    return null;
};

export default PageLoadingIndicator;