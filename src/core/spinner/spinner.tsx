import './spinner.scss'
export const Spinner = ({text,color = '#00f07d'}) => {
    const borderTop = `10px solid ${color}`
    return (
        <div className={'flex-col-center'}>
            <div className="spinner-container">
                <div className="loading-spinner"
                     style={{borderTop: borderTop}}>
                </div>
            </div>
            <p className={'spinner-text'}>{text}</p>
        </div>
    );
};
