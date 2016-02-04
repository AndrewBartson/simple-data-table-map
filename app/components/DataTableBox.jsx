import React from 'react';
import DataTable from './DataTable';
import SelectBox from './SelectBox';

export default class DataTableBox extends React.Component {
  render() {
    return (
      <div>
        <div className="row center-xs">
          <div className="col-xs-10">
            <SelectBox
              emptyRegions={this.props.emptyRegions}
              onAddRow={this.props.onAddRow}
            />
          </div>
        </div>
        <div className="row center-xs">
          <div className="col-xs-10">
            <DataTable
              regionData={this.props.regionData}
              sortState={this.props.sortState}
              onEditRow={this.props.onEditRow}
              onDeleteRow={this.props.onDeleteRow}
              toggleDirection={this.props.toggleDirection}
            />
          </div>
        </div>
      </div>
    );
  }
}

DataTableBox.propTypes = {
  regionData: React.PropTypes.array.isRequired,
  emptyRegions: React.PropTypes.array.isRequired,
  onEditRow: React.PropTypes.func.isRequired,
  onDeleteRow: React.PropTypes.func.isRequired,
  toggleDirection: React.PropTypes.func.isRequired
}
