import React, {PropTypes} from 'react';
import classnames from 'classnames';
import style from './style.css';

const Search = ({ wrapper, searchInput, searchBtn, search }) => {
    let classesWrapper = classnames(style.searchbar, wrapper.className);
    let classesInput = classnames(style.searchInput, searchInput.className);
    let classesButton = classnames(style.searchButton, searchBtn.className);
    let input;
    return (
      <div {...wrapper} className={classesWrapper}>
        <form onSubmit={function(e) {
            e.preventDefault();
            if (!input.value.trim()) {
                return;
            }
            search(input.value);
        }}>
          <input type='text' ref={function(node) { input = node; }} className={classesInput} {...searchInput} />
          <button type='submit' className={classesButton} {...searchBtn} onClick={searchBtn.onSubmit}>{searchBtn.value}</button>
        </form>
      </div>
    );
};

Search.propTypes = {
    wrapper: PropTypes.object,
    searchInput: PropTypes.shape({
        onChange: PropTypes.func.isRequired
    }),
    searchBtn: PropTypes.shape({
        onSubmit: PropTypes.func.isRequired
    }),
    search: PropTypes.func
};

Search.defaultProps = {
    wrapper: {
        className: ''
    },
    searchInput: {},
    searchBtn: {}
};

export default Search;
