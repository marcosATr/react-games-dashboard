import React from 'react';
import './FilterSection.css';
import InputBasic from './InputBasic';
function FilterSection() {
  return (
    <>
      <div className="box">
        <div className="mv2 flex row justify-space-between center filterSection">
          <div className="font-normal white">Próximos Lançamentos</div>
          <div>
            <InputBasic
              styleName="ph1"
              placeholder="Filter Genre, Name, Etc..."
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterSection;
