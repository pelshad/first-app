
// export default function Button(props){
//     console.log(props);
//     return (
//         <button className={props.color}> {props.text} </button>
//     );
// }

import PropTypes from 'prop-types';


//구조 분할 방식(똑같이 작동됨)
export default function Button({color, text, onClick}){
    return (
        <button onClick={onClick} className={color}> {text} </button>
    );
}

Button.propTypes = {
    text: PropTypes.string
}

Button.defaultProps = {
    text: 'btn'
}