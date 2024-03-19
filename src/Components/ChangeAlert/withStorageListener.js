import { useEffect, useState } from 'react'

function withStorageListener(WrappedComponent) {
  return function WrappedComponentWithStorageListener(props) {
    const [storageChange, setStorageChange] = useState(false);

    useEffect(() => {
        const onChange = (change) => {
        if (change.key === "TODOS") {
            console.log("There was a change in TODOS");
            setStorageChange(true);
        }
        };

        window.addEventListener("storage", onChange);
    }, [storageChange]);

    const toggleShow = () => {
        props.synchronize();
        setStorageChange(false);
    }

    return (
        <WrappedComponent
         show={storageChange}
         toggleShow={toggleShow}
         />
    );
  }
}

export default withStorageListener