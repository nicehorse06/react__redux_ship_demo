import { connect } from 'react-redux'
import MenuList from '../components/MenuList'

const mapStateToProps = state => ({
  menus: state.menus
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuList)
