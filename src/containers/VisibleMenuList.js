import { connect } from 'react-redux'
import MenuList from '../components/MenuList'
import { addShipList } from '../actions'

const mapStateToProps = state => ({
  menus: state.menus
})

const mapDispatchToProps = dispatch => ({
  addShipList: menu => dispatch(addShipList(menu))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuList)
