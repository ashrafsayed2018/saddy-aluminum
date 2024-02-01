import React from 'react';
const AddressMap = () => {
    return (
        <div className="google-map-code">
            <h1 className='font-bold text-xl lg:text-4xl text-white text-center my-8'>موقعنا في المملكة العربيه السعودية</h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3714.422706387418!2d39.34139168506076!3d21.412623985791697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDI0JzQ1LjUiTiAzOcKwMjAnMjEuMSJF!5e0!3m2!1sar!2seg!4v1706811542692!5m2!1sar!2seg"
                width="100%"
                height="450"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
            />
        </div>
    );
};
export { AddressMap };