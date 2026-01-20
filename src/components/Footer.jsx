const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-secondary py-10 mt-auto">
            <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
                <p>&copy; {new Date().getFullYear()} QuickCart. All rights reserved.</p>
            </div>
        </footer>
    );
};
export default Footer;
