import { createContext, useState } from 'react';

const HeaderContext = createContext({
    isDownloadVisible: false,
    // isShareVisible: false,
    isInfoVisible: false,
    setIsDownloadVisible: (isVisible) => {},
    // setIsShareVisible: (isVisible) => {},
    setIsInfoVisible: (isVisible) => {},
});

export function HeaderContextProvider(props) {

    const [isDownloadVisible, setIsDownloadVisible] = useState(false);
    // const [isShareVisible, setIsShareVisible] = useState(false);
    const [isInfoVisible, setIsInfoVisible] = useState(false);

    function downloadHandler(isVisible) {
        setIsDownloadVisible(isVisible);
    }

    // function shareHandler(isVisible) {
    //     setIsShareVisible(isVisible);
    // }

    function infoHandler(isVisible) {
        setIsInfoVisible(isVisible);
    }

    const context = {
        isDownloadVisible: isDownloadVisible,
        // isShareVisible: isShareVisible,
        isInfoVisible: isInfoVisible,
        setIsDownloadVisible: downloadHandler,
        // setIsShareVisible: shareHandler,
        setIsInfoVisible: infoHandler
    };
    return <HeaderContext.Provider value={context}>{props.children}</HeaderContext.Provider>
}

export default HeaderContext;