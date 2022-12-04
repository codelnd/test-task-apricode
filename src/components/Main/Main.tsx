import React from 'react';

const Main = ({children}: React.PropsWithChildren) => {
    return (
        <main>
            {children}
        </main>
    );
};

export default Main;
