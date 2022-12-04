import React from 'react';

const Main = ({children}: React.PropsWithChildren) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default Main;
