import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const FilterNode = ({ id }) => {
  const [condition, setCondition] = useState('value > 10');

  return (
    <BaseNode title="Filter" 
      handles={[{ id: `${id}-in`, type: 'target', position: Position.Left }, 
      { id: `${id}-out`, type: 'source', position: Position.Right }]} 
      width={220}>
      <div>
        <label style={{ fontSize: 12 }}>Condition:
          <input value={condition} onChange={(e) => setCondition(e.target.value)} style={{ marginLeft: 8 }} />
        </label>
      </div>
    </BaseNode>
  );
};
