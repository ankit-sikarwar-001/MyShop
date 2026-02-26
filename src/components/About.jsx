const About = () => {
    return (
        <div className="min-h-[80vh] bg-gray-100 py-12 px-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
                <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
                    About Us
                </h2>

                <p className="text-gray-600 mb-4 leading-relaxed">
                    Welcome to <span className="font-semibold text-blue-600">MyShop</span>.
                    We provide high-quality products at affordable prices.
                    Our mission is to deliver the best shopping experience with
                    fast delivery and secure payments.
                </p>

                <p className="text-gray-600 mb-4 leading-relaxed">
                    We focus on customer satisfaction, quality assurance,
                    and modern e-commerce solutions.
                </p>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold mb-2">Why Choose Us?</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-2">
                        <li>Trusted & Secure Payments</li>
                        <li>Fast Delivery</li>
                        <li>24/7 Customer Support</li>
                        <li>Best Quality Products</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;