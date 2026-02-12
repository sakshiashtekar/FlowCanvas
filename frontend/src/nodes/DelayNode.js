import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const DelayNode = ({ id }) => {
  const [ms, setMs] = useState(500);

  return (
    <BaseNode title="Delay" handles={[{ id: `${id}-in`, type: 'target', position: Position.Left }, { id: `${id}-out`, type: 'source', position: Position.Right }]} width={200}>
      <div>
        <label style={{ fontSize: 12 }}>ms:
          <input type="number" value={ms} onChange={(e) => setMs(e.target.value)} style={{ marginLeft: 8, width: 80 }} />
        </label>
      </div>
    </BaseNode>
  );
};
