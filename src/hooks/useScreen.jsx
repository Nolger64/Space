import { useState, useEffect } from "react";
export const useScreen = () => {
    const [screen, setScreen] = useState({ width: 0, height: 0 });
    
    useEffect(() => {
        const handleResize = () => {
        setScreen({
            width: window.innerWidth,
            height: window.innerHeight,
        });
        };
    
        window.addEventListener("resize", handleResize);
        handleResize();
    
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    
    return screen;
}