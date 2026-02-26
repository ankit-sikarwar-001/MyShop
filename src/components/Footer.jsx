const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-10">
            <div className="max-w-6xl mx-auto px-6 py-8 grid md:grid-cols-3 gap-8">

                {/* Brand */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-3">MyShop</h3>
                    <p className="text-sm">
                        Your trusted online shopping partner.
                        Quality products at the best price.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Home</li>
                        <li className="hover:text-white cursor-pointer">About</li>
                        <li className="hover:text-white cursor-pointer">Contact</li>
                        <li className="hover:text-white cursor-pointer">Cart</li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold text-white mb-3">
                        Contact Info
                    </h3>
                    <p className="text-sm">Email: support@myshop.com</p>
                    <p className="text-sm">Phone: +91 9876543210</p>
                    <p className="text-sm">India</p>
                </div>
            </div>

            <div className="text-center py-4 border-t border-gray-700 text-sm">
                © 2026 MyShop. All Rights Reserved.
            </div>
        </footer>
    );
};

export default Footer;