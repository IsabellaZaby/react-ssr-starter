import React from 'react'
import styles from './Style.module.scss'


const App: React.FC = () => {

    return (
        <div className={styles.test}>
            <p className="text-3xl font-bold underline">Hello from Client</p>
        </div>
    );
}

export default App;