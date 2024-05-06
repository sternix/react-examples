import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);
    const [isOnline, setIsOnline] = useState(true);

    // bu sadece bileşen ilk yüklendiğinde çalışıyor
    useEffect(() => {
        console.log('Constructor')

        // eğer başka sayfaya vs geçilecekse 
        // sayfa unload olurken çalışması lazım
        return () => {
            console.log('Destructor')
        }
    }, []);


    useEffect(() => {
        console.log(`bağımlı Count sayısı: ${count}`);

        return () => {
            console.log(`bağımlı Count return: ${count}`);
        }
    }, [count]);


    useEffect(() => {
        console.log(`bağımlı inOnline: ${isOnline}`);

        return () => {
            console.log(`bağımlı isOnline return: ${isOnline}`);
        }
    }, [isOnline]);


    useEffect(() => {
        console.log(`ikili isOnline: ${isOnline}`);
        console.log(`ikili count: ${count}`);

        return () => {
            console.log(`return ikili isOnline: ${isOnline}`);
            console.log(`return ikili Count: ${count}`);
        }
    }, [isOnline, count]);


    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Arttır
            </button>

            <button onClick={() => setIsOnline(!isOnline)}>
                Online'ı değiştir
            </button>
        </div>
    );
}

export default Example