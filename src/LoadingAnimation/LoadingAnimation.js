import {useUserDataRequest} from '../API/customHooks/useUserDataRequest';
import './LoadingAnimation.css'
import { useEffect, useRef, useState } from 'react';
import Chat from '../chat/Chat'


function LoadingAnimation() {

    const refHomePageLoader = useRef(null);
    const [titleRefs, setTitleRefs] = useState([])
    const [isLoadAniFinish, setIsLoadAniFinish] = useState(false);
    
    useEffect(() => {
        
        setTimeout(() => { 

            titleRefs.forEach((span, index) => {
                setTimeout(() => {
                    span.classList.add('activeAnimation');
                }, ((index + 1)) * 400);
            });

            setTimeout(() => {
                titleRefs.forEach((span, index) => {
                    setTimeout( () => {
                        span.classList.remove('activeAnimation');
                        span.classList.add('fadeAnimation');
                    }, ((index + 1) * 50));
                });
            }, 2000)

            setTimeout(() => {
                if (refHomePageLoader.current) {
                    refHomePageLoader.current.style.top = '-100vh';
                    
                }
            }, 2020);

            setTimeout(() => setIsLoadAniFinish(true), 600); // When changed to true we triger the typing animation.
        
        }, 500);

    }, [titleRefs]);

    const setSameRef = (element) => {
        if (element && !titleRefs.includes(element)) {
            setTitleRefs(pervRefs => [...pervRefs, element]);
        }
    };

    return (
        <div ref={refHomePageLoader} className='HomePageLoader'>
            <div className="LoaderTextContainer">
                <span ref={setSameRef} className='titleIntro'>{'Leaflet Chat App'}</span>
            </div>
        </div>
    )
}

export default LoadingAnimation;