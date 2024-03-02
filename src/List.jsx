import PropTypes from 'prop-types';

function List(props){

    const itemList = props.items;

    const listItems = itemList.map(item =>  <li key={item.id}>
        {item.name}: &nbsp;
        <b>{item.email}</b></li>);

    return (<ol className="list-items">{listItems}</ol>)
}
List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({  id: PropTypes.number,
                                                name: PropTypes.string,
                                                email: PropTypes.number})),
}
List.defaultProps = {
    items: [],
}

export default List