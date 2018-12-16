import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames";

const SelectBox = (
    {
        label,
        name,
        defaultValue,
        placeHolder,
        options,
        onChange,
        error
    }
) => {
    const pokemonTypes = options ? options.map(op => {
        return <option>{op}</option>
    }): null;

    return (
        <div className={'form-group'}>
            <label htmlFor={name}>{label}</label>
            <select
                multiple
                name={name}
                className={classNames('form-control form-control-lg', {
                    'is-invalid': error
                })}
                placeholder={placeHolder}
                value={defaultValue}
                onChange={onChange}
            >{pokemonTypes}</select>
            {error && <div className={'invalid-feedback'}>{error}</div>}
        </div>
    );
};

SelectBox.propTypes = {
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired
};

export default SelectBox;