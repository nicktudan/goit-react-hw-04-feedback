import PropTypes from 'prop-types'; 
import { BtnList, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <BtnList>
        {options.map((option, index) => {
            return (
                <Button
                    type="button"
                    key={index}
                    onClick={onLeaveFeedback}
                    // onClick={() => onLeaveFeedback(option)}
                >
                    {option}
                </Button>
            );
        })}
    </BtnList>
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}