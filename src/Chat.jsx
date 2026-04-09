import {useState , useEffect} from 'react';

const Chat = () => {
    const [resize, setResize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const handleResize = () => {
        setResize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    return (
        <div>
            <h1>Width: {resize.width} Height: {resize.height}</h1>
        </div>
    );
}

export default Chat;