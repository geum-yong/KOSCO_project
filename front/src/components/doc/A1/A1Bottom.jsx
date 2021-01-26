import React from 'react';
import styled from 'styled-components';

const BottomBox = styled.div`
  margin-bottom: 15px;
  border: 2px solid #000;

  > .bottom-title {
    padding: 5px;
    border-bottom: 1px solid #000;
    font-weight: 900;
  }

  > .bottom-description {
    padding: 10px;

    input {
      margin-right: 10px;
      width: 15px;
      height: 15px;
    }

    > div {
      display: flex;
      margin-bottom: 10px;
    }
  }
`;

const A1Bottom = () => {
  return (
    <BottomBox>
      <p className='bottom-title'>Description of Inspection;</p>
      <div className='bottom-description'>
        <div>
          <div>
            <input type='checkbox' id='bottom1' defaultChecked />
          </div>
          <label htmlFor='bottom1'>1. Before starting the inspection, made sure that all distributing valves were closed.</label>
        </div>
        <div>
          <div>
            <input type='checkbox' id='bottom2' defaultChecked />
          </div>
          <label htmlFor='bottom2'>2. All CO2 cylinders checked for weight of contents. (By liquid level indicator.)</label>
        </div>
        <div>
          <div>
            <input type='checkbox' id='bottom3' defaultChecked />
          </div>
          <label htmlFor='bottom3'>3. Pilot cylinders checked for weight/capacity of contents.</label>
        </div>
        <div>
          <div>
            <input type='checkbox' id='bottom4' defaultChecked />
          </div>
          <label htmlFor='bottom4'>4. All discharge valves and/or heads on CO2 cylinders visually inspected.</label>
        </div>
        <div>
          <div>
            <input type='checkbox' id='bottom5' defaultChecked />
          </div>
          <label htmlFor='bottom5'>5. Connecting lines from discharge valves and/or heads visually inspected.</label>
        </div>
        <div>
          <div>
            <input type='checkbox' id='bottom6' defaultChecked />
          </div>
          <label htmlFor='bottom6'>6. All cylinder clamps and connections checked for tightness.</label>
        </div>
        <div>
          <div>
            <input type='checkbox' id='bottom7' defaultChecked />
          </div>
          <label htmlFor='bottom7'>7. Manifold tested for leakage, by applying dry working air.</label>
        </div>
        <div>
          <div>
            <input type='checkbox' id='bottom8' defaultChecked />
          </div>
          <label htmlFor='bottom8'>8. Main valve and distribution valve visually inspected.</label>
        </div>
        <div>
          <div>
            <input type='checkbox' id='bottom9' defaultChecked />
          </div>
          <label htmlFor='bottom9'>9. Time delay devices tested for correct setting.</label>
        </div>
        <div>
          <div>
            <input type='checkbox' id='bottom10' defaultChecked />
          </div>
          <label htmlFor='bottom10'>10. Remote release system visually inspected.</label>
        </div>
        <div>
          <div>
            <input type='checkbox' id='bottom11' defaultChecked />
          </div>
          <label htmlFor='bottom11'>
            11. Servo tubing/pilot line pressure tested at maximum working pressure and checked for leakages and blockage.
          </label>
        </div>
        <div>
          <div>
            <input type='checkbox' id='bottom12' defaultChecked />
          </div>
          <label htmlFor='bottom12'>12. Manual pull cables, pulleys, gang releases tested, serviced and tightened/adjusted as necessary.</label>
        </div>
        <div>
          <div>
            <input type='checkbox' id='bottom13' defaultChecked />
          </div>
          <label htmlFor='bottom13'>13. Release station visually inspected.</label>
        </div>
        <div>
          <div>
            <input type='checkbox' id='bottom14' defaultChecked />
          </div>
          <label htmlFor='bottom14'>14. Warning alarms & fan stop tested.</label>
        </div>
        <div>
          <div>
            <input type='checkbox' id='bottom15' defaultChecked />
          </div>
          <label htmlFor='bottom15'>15. 10% of cylinders and pilot cylinder/s pressure tested every 10 years.</label>
        </div>
        <div>
          <div>
            <input type='checkbox' id='bottom16' defaultChecked />
          </div>
          <label htmlFor='bottom16'>16. Distribution lines and nozzle blown through, by applying dry working air.</label>
        </div>
        <div>
          <div>
            <input type='checkbox' id='bottom17' defaultChecked />
          </div>
          <label htmlFor='bottom17'>17. All door, hinges and locks inspected.</label>
        </div>
        <div>
          <div>
            <input type='checkbox' id='bottom18' defaultChecked />
          </div>
          <label htmlFor='bottom18'>18. All flexible hose renewed and check valve in manifold visually inspected every 10 years.</label>
        </div>
        <div>
          <div>
            <input type='checkbox' id='bottom19' defaultChecked />
          </div>
          <label htmlFor='bottom19'>19. Release controls and distribution valve reconnected and system put back in service.</label>
        </div>
        <div>
          <div>
            <input type='checkbox' id='bottom20' defaultChecked />
          </div>
          <label htmlFor='bottom20'>20. Inspection date tags attached.</label>
        </div>
        <div>
          <div>
            <input type='checkbox' id='bottom21' defaultChecked />
          </div>
          <label htmlFor='bottom21'>21. Activating heads of cylinder valve operating tested, pilot line function tested, visually inspected.</label>
        </div>
        <div>
          <div>
            <input type='checkbox' id='bottom22' defaultChecked />
          </div>
          <label htmlFor='bottom22'>22. Control valve overhaul inspection.</label>
        </div>
      </div>
    </BottomBox>
  );
};

export default A1Bottom;
