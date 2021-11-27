import { ReactElement } from 'react';
import Header from "./Header";
import Footer from "./Footer";

interface PageProps {
    children: React.ReactElement | ReactElement[];
}

const Page: React.FC<PageProps> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Page;