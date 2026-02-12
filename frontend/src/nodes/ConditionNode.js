import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id }) => {
  const [label, setLabel] = useState('Check');

  return (
    <BaseNode title="Condition" handles={[
      { id: `${id}-in`, type: 'target', position: Position.Left },
      { id: `${id}-true`, type: 'source', position: Position.Right, style: { top: 30 } },
      { id: `${id}-false`, type: 'source', position: Position.Right, style: { top: 60 } },
    ]} width={240}>
      <div>
        <label style={{ fontSize: 12 }}>Label:
          <input value={label} onChange={(e) => setLabel(e.target.value)} style={{ marginLeft: 8 }} />
        </label>
      </div>
    </BaseNode>
  );
};
