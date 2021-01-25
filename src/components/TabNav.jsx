import React from 'react';
class TabNav extends React.Component {
  render() {
    return (
      <div style={{ width: '90%',marginLeft: '12px' }}>
        <ul className="nav nav-tabs">
          {
            this.props.tabs.map(tab => {
                        const active = (tab === this.props.selected ? 'active ' : '' );
            return (
                <li className="nav-item" key={ tab }>
                <button className={"nav-link " + active } onClick={ () => this.props.setSelected(tab) }>
                    { tab }
                </button>
                </li>
            );
            })
          }
        </ul>
        { this.props.children }
    </div>
    );
  }
}
export default TabNav;